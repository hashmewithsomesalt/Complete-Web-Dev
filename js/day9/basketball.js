let score1 = 0
let score2 = 0
function plusone() {
    score1 += 1
    document.getElementById("scoreA").textContent= score1
}
function plustwo() {
    score1 += 2
    document.getElementById("scoreA").textContent= score1
}
function plusthree() {
    score1 += 3
    document.getElementById("scoreA").textContent= score1
}

function plusone1() {
    score2 += 1
    document.getElementById("scoreB").textContent= score2
}
function plustwo2() {
    score2 += 2
    document.getElementById("scoreB").textContent= score2
}
function plusthree3() {
    score2 += 3
    document.getElementById("scoreB").textContent= score2
}

function resetbtn() {
    score1 = 0
    score2 = 0
    document.getElementById("scoreA").textContent = 0
    document.getElementById("scoreB").textContent = 0
}