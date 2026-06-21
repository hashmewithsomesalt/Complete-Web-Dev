//1 parameter
const getSpendAlert = (amount) => {
    return `Warning! You just spent $ ${amount}!`
}

console.log(getSpendAlert(156))

//0 parameter
const getSpendAlert1 = () => {
    return `Warning! You just spent some amount!`
}

console.log(getSpendAlert1())

//2 parameter
const getSpendAlert2 = (name, amount) => {
    return `Hey ${name}! You just spent $ ${amount}!`
}

console.log(getSpendAlert2("Aryan",156))

//When using 1 Parameter: brackets not needed
// When using 0 or 2 or more parameter: brackets needed

const getSpendAlert3 = amount => `Warning! You just spend $ ${amount}`
console.log(getSpendAlert3(34))

const getSpendAlert4 = amount => {
    if (amount > 40) {
        return  `You spend $ ${amount}`
    }
}

console.log(getSpendAlert4(53))