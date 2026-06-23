/*
Challenge:
1. Make a fetch request to the "Bored" API:
    Base URL: https://apis.scrimba.com/bored/api
    Endpoint: /activity

2. Log an object containing an activity suggestion
    to the console.

    Make sure you use the async/await method!
*/

async function getSuggestion() {
    const response = await fetch("https://apis.scrimba.com/bored/api/activity")
    const data = await response.json()
    console.log(data)
}

getSuggestion()
