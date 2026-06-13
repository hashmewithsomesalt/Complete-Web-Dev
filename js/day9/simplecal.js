let num1 = 8
let num2 = 9

document.getElementById("var1").textContent = num1
document.getElementById("var2").textContent = num2

function add() {
    document.getElementById("ans").textContent = "sum: " + (num1 + num2)
}

function subtract() {
    document.getElementById("ans").textContent = "subtract: " + (num1 - num2)
}

function multiply() {
    document.getElementById("ans").textContent = "multiply: " + (num1 * num2)
}

function divide() {
    document.getElementById("ans").textContent = "divide: " + (num1 / num2)
}