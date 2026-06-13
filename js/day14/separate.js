let fruits = [
    "🍎", "🍏", "🍊",
    "🍎", "🍊", "🍏",
    "🍎", "🍊", "🍎"
];

let appleShelf = document.getElementById("for-apples")
let orangeShelf = document.getElementById("for-oranges")
let guavaShelf = document.getElementById("for-guava")

function sortFruit() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "🍎") {
            appleShelf.textContent += "🍎" + " "
        } else if (fruits[i] === "🍊") {
            orangeShelf.textContent += "🍊" + " "
        } else {
            guavaShelf.textContent += "🍏" + " "
        }
    }
}
