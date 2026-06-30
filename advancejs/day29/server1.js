//REPL: Read, Evaluate, Print, Loop
import http from 'node:http'
import { getDataFromDB } from './db1.js'

const PORT = 3000

const server = http.createServer(async (req, res) => {

    const destinations = await getDataFromDB()
    const data = JSON.stringify(destinations)
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)

    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.end(`${data}`)
    } else if (req.url.startsWith('/api/continent') && req.method === 'GET'){
        const continent = req.url.split('/').pop()
        const filterData = destinations.filter((destination) => {
            return destination.continent.toLowerCase() === continent.toLowerCase()
        })
        sendJSONResponse(res, 200, filterData)

    } else if (req.url.startsWith('api/country') && req.method === 'GET') {
        const country = req.url.split('/').pop()
        const filterData = 
        sendJSONResponse(res, 200, filterData)
    }
    else {
        res.setHeader('Content-Type','application/json')
        res.statusCode = 404
        res.end(JSON.stringify({error: "not found", message: "The requested route does not exist"}))
    }
})

server.listen(PORT, () => console.log(`server running on port: ${PORT}`))
