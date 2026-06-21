export function getStockData() {
    return {
        name: "QTech",
        symbol: "QTA",
        price: Number((Math.random() * 3).toFixed(2)),
        time: new Date().toLocaleTimeString()
    }
}
