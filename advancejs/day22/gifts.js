function getLabelsHtml(...names) {
    let mystr = ''
    let sender = 'Aryan'
    let text = 'Thank you for all your hard work throughout the year!'
    names.forEach((name) => mystr += `<div>
    <p>Dear ${name}</p>
    <p>${text}</p>
    <p>Best Wishes,</p>
    <p>${sender}</p></div>`)
    return mystr
}

document.getElementById('labels').innerHTML = getLabelsHtml("Ritesh", "Sui", "Wio", "Ui")