const http = require('http')


// 创建一个服务器
const server = http.createServer((req, res) => {
    res.end('Hello Sever1')
    // res.end('Hello Server') 等价于

    // res.write('Hello Server')
    // res.close()
})

// 启动服务器并指定 端口号 和 主机
// sever.listen 是一个异步函数
server.listen(8888, 'localhost', ()=> {
    console.log('服务器请求成功  ');
})