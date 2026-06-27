/**
 * PingMentor Architecture Review Interface - Main Script
 * Handles PDF rendering via PDF.js, dynamic lens rendering, and scale calculations.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global States
  let isMagnifierMode = false;
  let globalZoomScale = 3.0;
  const MIN_ZOOM = 1.5;
  const MAX_ZOOM = 5.0;
  const ZOOM_STEP = 0.5;
  
  let highResImageUrl = '';
  let containerRect = null;
  let lastMouseX = 0;
  let lastMouseY = 0;
  let isMouseInside = false;

  // DOM Elements
  const pdfCanvas = document.getElementById('pdf-canvas');
  const canvasContainer = document.getElementById('canvas-container');
  const workflowWrapper = document.getElementById('workflow-wrapper');
  const loader = document.getElementById('loader');
  const progressBar = document.getElementById('progress-bar');
  const magnifierLens = document.getElementById('magnifier-lens');
  const lensLabel = magnifierLens.querySelector('.lens-label');
  
  // Controls Overlay Elements
  const toggleBtn = document.getElementById('toggle-magnifier');
  const toggleIcon = toggleBtn.querySelector('.btn-icon i');
  const toggleLabel = toggleBtn.querySelector('.btn-label');
  const scaleDecBtn = document.getElementById('scale-dec');
  const scaleIncBtn = document.getElementById('scale-inc');
  const scaleValueDisplay = document.getElementById('scale-value');
  const statusDot = document.getElementById('status-dot');
  const toast = document.getElementById('toast');

  // PDF.js configuration
  const pdfUrl = 'PingMentor Workflow.pdf';
  const renderScale = 3.5; // High render scale for crystal clear zooming

  // Set worker source
  if (window.pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    loadAndRenderPDF();
  } else {
    showToast('Failed to load PDF.js engine. Please refresh.');
  }

  /**
   * Loads and renders the PDF workflow onto the canvas.
   */
  function loadAndRenderPDF() {
    updateProgress(15);
    
    const loadingTask = pdfjsLib.getDocument(pdfUrl);
    
    // Track loading progress
    loadingTask.onProgress = function(progressData) {
      if (progressData.total > 0) {
        const percent = Math.round((progressData.loaded / progressData.total) * 60) + 15;
        updateProgress(percent);
      }
    };

    loadingTask.promise.then(pdf => {
      updateProgress(80);
      
      // We only care about page 1 of this architecture workflow PDF
      pdf.getPage(1).then(page => {
        const viewport = page.getViewport({ scale: renderScale });
        
        // Match canvas dimensions to the scaled PDF viewport
        pdfCanvas.width = viewport.width;
        pdfCanvas.height = viewport.height;
        
        const context = pdfCanvas.getContext('2d', { alpha: false });
        
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        
        page.render(renderContext).promise.then(() => {
          updateProgress(100);
          
          // Wait briefly for a smooth transition from loader to canvas
          setTimeout(() => {
            // Extract the high-resolution image data URL
            highResImageUrl = pdfCanvas.toDataURL('image/png');
            
            // Set the magnifier lens background
            magnifierLens.style.backgroundImage = `url(${highResImageUrl})`;
            
            // Swap loader with canvas view
            loader.style.display = 'none';
            canvasContainer.style.display = 'block';
            
            // Initialize interface event listeners
            initMagnifierLogic();
            showToast('Workflow loaded successfully!');
          }, 300);
        });
      });
    }).catch(error => {
      console.error('Error loading PDF: ', error);
      loader.innerHTML = `
        <div class="error-state" style="text-align: center; padding: 2rem;">
          <i class="fa-solid fa-circle-exclamation" style="font-size: 3rem; color: #ef4444; margin-bottom: 1rem;"></i>
          <p style="color: #ef4444; font-weight: 600; margin-bottom: 0.5rem;">Failed to load PDF file</p>
          <p style="font-size: 0.85rem; color: var(--color-text-muted);">Please verify that "PingMentor Workflow.pdf" exists in the root folder.</p>
        </div>
      `;
    });
  }

  /**
   * Helper to update the loader progress bar
   */
  function updateProgress(value) {
    progressBar.style.width = `${value}%`;
  }

  /**
   * Shows a temporary glassmorphic toast notification
   */
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    // Clear existing timeout if any
    if (window.toastTimeout) {
      clearTimeout(window.toastTimeout);
    }
    
    window.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

  /**
   * Sets up the interaction listeners for magnification, hover, and resizing.
   */
  function initMagnifierLogic() {
    // 1. Mouse Event Listeners for tracking cursor
    canvasContainer.addEventListener('mouseenter', handleMouseEnter);
    canvasContainer.addEventListener('mouseleave', handleMouseLeave);
    canvasContainer.addEventListener('mousemove', handleMouseMove);
    
    // Double click on container toggles magnification mode
    canvasContainer.addEventListener('dblclick', (e) => {
      e.preventDefault();
      toggleMagnificationMode();
    });

    // 2. Control Panel Event Listeners
    toggleBtn.addEventListener('click', toggleMagnificationMode);
    scaleDecBtn.addEventListener('click', () => adjustZoomScale(-ZOOM_STEP));
    scaleIncBtn.addEventListener('click', () => adjustZoomScale(ZOOM_STEP));

    // 3. Window resize listener to recalculate container bounding box
    window.addEventListener('resize', () => {
      if (canvasContainer.style.display === 'block') {
        containerRect = canvasContainer.getBoundingClientRect();
      }
    });

    // 4. Keyboard Shortcuts
    document.addEventListener('keydown', handleKeyboardShortcuts);
  }

  /**
   * Handles when the mouse enters the canvas area.
   */
  function handleMouseEnter(e) {
    if (!isMagnifierMode) return;
    
    isMouseInside = true;
    containerRect = canvasContainer.getBoundingClientRect();
    magnifierLens.classList.add('active');
    
    // Immediate position update to prevent jumping
    updateLensPosition(e);
  }

  /**
   * Handles when the mouse leaves the canvas area.
   */
  function handleMouseLeave() {
    isMouseInside = false;
    magnifierLens.classList.remove('active');
  }

  /**
   * Handles real-time cursor movements on the canvas.
   */
  function handleMouseMove(e) {
    if (!isMagnifierMode) return;
    
    // Ensure we have a valid bounding box
    if (!containerRect) {
      containerRect = canvasContainer.getBoundingClientRect();
    }
    
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    
    // Schedule update on animation frame for optimal 60fps tracking
    requestAnimationFrame(() => {
      if (isMouseInside && isMagnifierMode) {
        updateLensPosition(e);
      }
    });
  }

  /**
   * Calculates lens position and aligns background viewport.
   */
  function updateLensPosition(e) {
    if (!containerRect) return;

    // Relative coordinates of mouse cursor inside the container (px)
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    const lensWidth = magnifierLens.offsetWidth || 240;
    const lensHeight = magnifierLens.offsetHeight || 240;

    // Positioning the lens centered on the cursor using translate3d (hardware accelerated)
    const translateX = mouseX - (lensWidth / 2);
    const translateY = mouseY - (lensHeight / 2);
    magnifierLens.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;

    // Calculate background size based on current DOM container dimensions and scale
    const containerWidth = canvasContainer.clientWidth;
    const containerHeight = canvasContainer.clientHeight;
    magnifierLens.style.backgroundSize = `${containerWidth * globalZoomScale}px ${containerHeight * globalZoomScale}px`;

    // Mathematical background alignment formula:
    // bgPos = (lensCenter) - (cursorPositionInBackgroundScale)
    const bgPosX = (lensWidth / 2) - (mouseX * globalZoomScale);
    const bgPosY = (lensHeight / 2) - (mouseY * globalZoomScale);
    
    magnifierLens.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
  }

  /**
   * Toggles the magnification state.
   */
  function toggleMagnificationMode() {
    isMagnifierMode = !isMagnifierMode;
    
    if (isMagnifierMode) {
      // Activated state
      toggleBtn.classList.add('active');
      toggleIcon.className = 'fa-solid fa-eye';
      toggleLabel.textContent = 'Magnify: ON';
      statusDot.className = 'status-dot active';
      canvasContainer.style.cursor = 'none'; // hide cursor so lens serves as custom cursor
      
      showToast('Magnification Mode Enabled');
      
      // If cursor is already over the image, trigger mouse enter
      const hoverElements = document.querySelectorAll(':hover');
      const isHovering = Array.from(hoverElements).includes(canvasContainer);
      if (isHovering) {
        containerRect = canvasContainer.getBoundingClientRect();
        isMouseInside = true;
        magnifierLens.classList.add('active');
        
        // Retrieve mouse coordinates and trigger update
        const mouseEvent = new MouseEvent('mousemove', {
          clientX: lastMouseX || (containerRect.left + containerRect.width / 2),
          clientY: lastMouseY || (containerRect.top + containerRect.height / 2)
        });
        updateLensPosition(mouseEvent);
      }
    } else {
      // Deactivated state
      toggleBtn.classList.remove('active');
      toggleIcon.className = 'fa-solid fa-eye-slash';
      toggleLabel.textContent = 'Magnify: OFF';
      statusDot.className = 'status-dot inactive';
      canvasContainer.style.cursor = 'crosshair';
      
      magnifierLens.classList.remove('active');
      isMouseInside = false;
      
      showToast('Magnification Mode Disabled');
    }
  }

  /**
   * Adjusts the magnifier scaling.
   */
  function adjustZoomScale(delta) {
    let newScale = globalZoomScale + delta;
    
    // Clamp values between min and max bounds
    if (newScale < MIN_ZOOM) newScale = MIN_ZOOM;
    if (newScale > MAX_ZOOM) newScale = MAX_ZOOM;
    
    if (newScale === globalZoomScale) return; // No change
    
    globalZoomScale = newScale;
    
    // Update UI overlays
    const scaleStr = `${globalZoomScale.toFixed(1)}x`;
    scaleValueDisplay.textContent = scaleStr;
    lensLabel.textContent = scaleStr;
    
    // Subtle border pulse based on current scale setting
    // Blue to purple based on zoom level
    const intensity = (globalZoomScale - MIN_ZOOM) / (MAX_ZOOM - MIN_ZOOM);
    const borderColor = interpolateColor('#00f2fe', '#9d4edd', intensity);
    magnifierLens.style.borderColor = borderColor;
    
    showToast(`Zoom scale set to ${scaleStr}`);

    // If lens is active, force refresh background alignment
    if (isMagnifierMode && isMouseInside) {
      const mockEvent = {
        clientX: lastMouseX,
        clientY: lastMouseY
      };
      updateLensPosition(mockEvent);
    }
  }

  /**
   * Keyboard shortcuts handling
   */
  function handleKeyboardShortcuts(e) {
    // Ignore if typing in an input (not relevant here but good practice)
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.code) {
      case 'KeyM':
        e.preventDefault();
        toggleMagnificationMode();
        break;
      case 'Equal':
      case 'NumpadAdd':
        e.preventDefault();
        adjustZoomScale(ZOOM_STEP);
        break;
      case 'Minus':
      case 'NumpadSubtract':
        e.preventDefault();
        adjustZoomScale(-ZOOM_STEP);
        break;
    }
  }

  /**
   * Linearly interpolates two Hex colors
   */
  function interpolateColor(color1, color2, factor) {
    const r1 = parseInt(color1.slice(1, 3), 16);
    const g1 = parseInt(color1.slice(3, 5), 16);
    const b1 = parseInt(color1.slice(5, 7), 16);

    const r2 = parseInt(color2.slice(1, 3), 16);
    const g2 = parseInt(color2.slice(3, 5), 16);
    const b2 = parseInt(color2.slice(5, 7), 16);

    const r = Math.round(r1 + factor * (r2 - r1));
    const g = Math.round(g1 + factor * (g2 - g1));
    const b = Math.round(b1 + factor * (b2 - b1));

    const toHex = val => val.toString(16).padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
});
