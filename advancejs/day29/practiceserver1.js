import http from 'node:http'

const PORT = 8000

const server = http.createServer((req, res) => {
    console.log(req.url)

    if (req.method === 'GET') {
        res.end('Hello from server!', 'utf8', () => console.log('response end'))
    }
})
server.listen(PORT, () => console.log(`Practice server is running on port: ${8000}`))

