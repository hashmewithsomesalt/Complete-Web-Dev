function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            baseString += arr[i] + "."
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}

console.log(generateSentence("best places", ["Earth", "Mars"]))