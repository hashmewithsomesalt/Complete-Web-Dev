function selectItem(item) {
    let price = 0

    switch(item) {
        case "coffee":
            price = 3
            break
        case "biscuit":
            price = 2
            break
        default:
            return `We don't sell ${item}`
    }
    return `The price of ${item} is $ ${price}`
}
console.log(selectItem("tea"))
console.log(selectItem("biscuit"))
console.log(selectItem("coffee"))