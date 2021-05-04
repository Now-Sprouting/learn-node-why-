const express = require('express')

const app = express()

app.get('/home', (req, res, next) => {
    console.log('home middle1 注册成功');
    next()
}, (req, res, next) => {
    console.log('home middle2 注册成功');
    next()
}, (req, res, next) => {
    console.log('home middle3 注册成功');
    res.end('home middle')
})


app.listen(9000, () => {
    console.log('express 连续注册中间件启动完成');
})