const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url)
    if (pathname === '/login') {
        if (req.method === 'POST') {
            res.write('欢迎回来')
            res.end()
        }
    }
})

server.listen(9001, '0.0.0.0', ()=> {
    console.log('服务器启动成功1');
})