let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 13 || randomNumber === 11 || randomNumber === 12) {
        randomNumber = 10
    } else if (randomNumber === 1) {
        randomNumber = 11
    }
    return randomNumber
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    cardsEl.textContent = "Your Cards: " + cards[0] + " " + cards[1] + " "
    renderGame()
}

function renderGame() {

    sumEl.textContent = "Your Sum is: " + sum
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "you won!"
        hasBlackJack = true
    } else {
        message = "you're out of the game!"
        isAlive = false
    }

    messageEl.textContent = message

}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
