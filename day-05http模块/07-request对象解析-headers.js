const http = require('http')
const url = require('url')
const qs = require('querystring')

const server = http.createServer((req, res) => {
    const {pathname, query} = url.parse(req.url)
    if (pathname === '/login') {
        if (req.method === 'POST') {
            console.log(req.headers);
            //! content-type 客户端发送数据的类型
            //! content-length 数据的长度
            //! connection: 'keep-alive'
            //$在 http1.0 中 需要长连接需要加上 connection: 'keep-alive' 字段
            //$在 http1.1 中 默认会有 connection: 'keep-alive' 属性来保持长连接
            //! accept-encoding 告诉服务器客户端接受的压缩方式，chrome 默认会把 gzip 文件转换为 js 文件
            //! accept: 告诉服务器客户端接受的文件类型
            //! user-agent: 客户端信息
        }
    }
    res.end('欢迎回来')
})

server.listen(9001, '0.0.0.0', ()=> {
    console.log('服务器启动成功');
})