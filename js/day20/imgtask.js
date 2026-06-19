const imgs = [
    "img1.webp",
    "img2.webp", 
    "img3.webp"
]

const container = document.getElementById("container")

function renderImages() {
    let images = ""
    for (let i = 0; i < imgs.length; i++) {
        images += `<img class = "team-img" src= "${imgs[i]}">`
    }
    container.innerHTML = images
}
renderImages()
