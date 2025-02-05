const { createServer } = require('http')



const HOST = "127.0.0.1"
const PORT = 8080

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><body><h1>This is HTML</h1></body></html>`)

})

server.listen(PORT, HOST, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
})
