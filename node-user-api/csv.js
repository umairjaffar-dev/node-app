const { createServer } = require('http')

const HOST = "127.0.0.1"
const PORT = 8080

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/csv', "content-disposition": "attachment;filename=oceanpals.csv" });
    res.end(`id,name,email\n1,Umair,umair@gmail.com\n2,ali,ali@gmail.com`)

})

server.listen(PORT, HOST, () => {
    console.log(`Server is running at ${HOST}:${PORT}`);
})
