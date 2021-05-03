const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url)
    if (pathname === '/login') {
        if (req.method === 'POST') {
            // 获取 body 中的数据
             // 提前设置为 utf-8
            req.setEncoding('utf-8')
            req.on('data', (data) => {
                // 默认 data 是 Binary 类型
                console.log(JSON.parse(data));
            })
        }
    }
    res.end('欢迎回来')
})

server.listen(9001, '0.0.0.0', ()=> {
    console.log('服务器启动成功');
})