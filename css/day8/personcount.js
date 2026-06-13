let current = document.getElementById("count-container")

let count = 0

function increment() {
    count += 1
    current.innerText = count
}

function decrement() {
    if (count === 0) return
    else {
        count -= 1
        current.textContent = count
    }
}

let current_save = document.getElementById("saved")

function saveddata() {
    current_save.textContent += count + " - "
    count = 0
    current.textContent = count
}
