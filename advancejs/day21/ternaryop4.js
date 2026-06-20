const playerGuess = 12
const correctGuess = 7

const message = playerGuess < correctGuess ? "Too low" : playerGuess === correctGuess ? "Correct Guess" : "Too high"

console.log(message)