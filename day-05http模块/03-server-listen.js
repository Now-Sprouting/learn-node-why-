http = require('http')


const server = http.createServer((req, res) => {
    res.end('Hello Sever1')
})

// listen 三个参数
//! 参数1 端口号：默认一个随机参数
//! 参数2 主机地址：
// $localhost:local本质上是一个域名，通常被解析为 127.0.0.1
// $127.0.0.1:回环地址，表达的意思其实是我们主机自己发出的包，直接被自己接收
// $0.0.0.0:监听所有 IPV4以上的所有地址，再根据端口号找出相关应用(所以默认情况下都给 0.0.0.0)


server.listen(8888, '0.0.0.0', ()=> {
    console.log('服务器请求成功  ');
})