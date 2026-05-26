var http = require('http')
const file = require('fs')
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html"
    })
    file.readFile('./sample.html', (error, data) => {
        if(error) {
            res.writeHead(error)
            
        }
        else {
            res.write(data)
        }
    })
})


server.listen(3000, () => {
    console.log('HTTPS server running on https://localhost:3000');

})
