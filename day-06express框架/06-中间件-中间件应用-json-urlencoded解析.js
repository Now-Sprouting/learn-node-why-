const express = require('express')

const app = express()


// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/json') {
//         req.on('data', (data) => {
//             const info = JSON.parse(data.toString())
//             req.body = info;
//         })
//         req.on('end', () => {
//             next()
//         })
//     }else {
//         next()
//     }
// })

// !等价于
// !对 JSON 数据进行解析
app.use(express.json());

// !对 x-www-form-urlencoded 数据进行解析
app.use(express.urlencoded({extended: true}));


app.post('/login', (req, res, next) => {
    console.log('home middle1 注册成功');
    console.log(req.body);
    res.end('login middle')
})

app.post('/product', (req, res, next) => {
    console.log('home middle2 注册成功');
    console.log(req.body);
    res.end('product middle')
})


app.listen(9000, () => {
    console.log('express 中间件应用-json解析启动成功');
})