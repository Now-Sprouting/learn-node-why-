const http = require('http')
// 内置模块 url 对 客户端发送出来的 url进行解析
const url = require('url')
// 内置模块对 query 做处理
const qs = require('querystring')

// 创建一个服务器
const server = http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url)
    console.log(pathname, query);
    console.log(qs.parse(query));
    res.end('欢迎回来')
})

server.listen(9001, '0.0.0.0', ()=> {
    console.log('服务器启动成功');
})