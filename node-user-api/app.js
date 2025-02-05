const { createServer } = require('http')

const HOST = "127.0.0.1"
const PORT = 8080

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello 🐍 from server side.')

})

server.listen(PORT, HOST, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
})