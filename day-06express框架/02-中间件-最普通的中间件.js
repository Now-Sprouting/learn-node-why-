const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('第 1 个中间件注册成功');
    next()
})

app.use((req, res, next) => {
    console.log('第 2 个中间件注册成功');
    next()
})

app.use((req, res, next) => {
    console.log('第 3 个中间件注册成功');
    res.end('第 3 个中间件')
})

app.listen(9000, () => {
    console.log('express 最普通的中间件启动完成');
})