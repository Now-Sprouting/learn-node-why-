const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
    // !设置方式1
    // res.setHeader('Content-Type', 'text/plain')

    // !设置方式2
    res.writeHead(200, { "Content-Type": "text/html" })
    res.write('<h1>Hello</h1>')
    res.end()
})

server.listen(9001, '0.0.0.0', () => {
    console.log('服务器启动成功');
})