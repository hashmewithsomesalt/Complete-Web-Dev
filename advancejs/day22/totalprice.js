import { itemBroughtArr } from "./itemBroughtArr.js";
//default parameter and reduce method
function calculateTotalCost(itemBroughtArr, discount = 0) {
    //if (!discount) {
    //    discount = 0
    //}
    const total = itemBroughtArr.reduce((total, currentItem) =>
    total + currentItem.priceUSD, 0
)
return total - discount
}

console.log(calculateTotalCost(itemBroughtArr))
console.log(calculateTotalCost(itemBroughtArr, 20))