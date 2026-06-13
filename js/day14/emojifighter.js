let emojis = [
    "😀", "😎", "🚀", "🎯", "🔥",
    "💡", "🎉", "🌟", "⚡", "🎮",
    "🐱", "🐶", "🦊", "🐼", "🦁",
    "🍕", "🍔", "🍟", "🍩", "🍪",
    "⚽", "🏀", "🏆", "🥇", "🎲",
    "🚗", "✈️", "🚀", "🛸", "🚢",
    "❤️", "💙", "💚", "💜", "💖",
    "🌈", "☀️", "🌙", "⭐", "🌍",
    "📚", "💻", "📱", "🎧", "📷",
    "😂", "🤣", "😍", "🤔", "🥳"
];

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("startButton")

fightButton.addEventListener("click", function(){
    let length_of_array = emojis.length
    let random1 = Math.floor(Math.random() * length_of_array)
    let random2 = Math.floor(Math.random() * length_of_array)

    stageEl.textContent = emojis[random1] + " VS " + emojis[random2]
})