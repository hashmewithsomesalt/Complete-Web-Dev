import { getStockData } from "./stockprice.js"

let prevPrice = null

renderStockTicker(getStockData())

setInterval(() => {
    const stockData = getStockData()
    renderStockTicker(stockData)
}, 1500)


function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById('name');
    const stockDisplaySymbol = document.getElementById('symbol');
    const stockDisplayPrice = document.getElementById('price');
    const stockDisplayPriceIcon = document.getElementById('price-icon');
    const stockDisplayTime = document.getElementById('time');

    const {name, symbol, price, time} = stockData

    let priceDirectionIcon = "=="

    if (prevPrice !== null) {
        if (price > prevPrice) {
            priceDirectionIcon = "🟢 ↑"
        } else if (price < prevPrice) {
            priceDirectionIcon = "🔴 ↓"
        }  else {
        priceDirectionIcon = "⚪ →"
        }
    }

    stockDisplayName.innerText = `Company: ${name}`
    stockDisplaySymbol.innerText = `Symbol: ${symbol}`
    stockDisplayPrice.innerText = `Price: $${price}`
    stockDisplayTime.innerText = `Updated: ${time}`
    stockDisplayPriceIcon.innerText = `Trend: ${priceDirectionIcon}`

    prevPrice = price
}