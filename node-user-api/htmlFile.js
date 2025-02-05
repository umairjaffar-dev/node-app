const { createServer } = require('http')
const fs = require('fs')

const HOST = "127.0.0.1"
const PORT = 8080

const server = createServer((req, res) => {
    // serve html file to browser.
    fs.readFile(__dirname + "/index.html").then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents).catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
    })


})

server.listen(PORT, HOST, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
})
