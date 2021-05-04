const express = require('express')

const app = express()

app.get('/home', (req, res, next) => {
   console.log('home middle1 注册成功');
   res.end('home middle1')
})


app.listen(9000, () => {
    console.log('express 路径和方法匹配中间件启动完成');
})