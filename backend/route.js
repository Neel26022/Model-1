var http = require('http')
const file = require('fs')
const { error } = require('console')
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "content-type": "text/html"
    })
    if(req.url.includes('/file')) {
        file.readFile('./sample.html', (error, data) => {
            if(error) {
                res.writeHead(error)
            }
            else {
                res.write(data)
            }
        })
    } else if(req.url.includes('/')) {
        res.write("Home page")
    }
})


server.listen(3000, () => {
    console.log('HTTPS server running on http://localhost:3000');

})

