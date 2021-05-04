const express = require('express')

const app = express()

app.use('/home', (req, res, next) => {
   console.log('home middle1 注册成功');
   res.end('home middle1')
})


app.listen(9000, () => {
    console.log('express 路径匹配中间件启动完成');
})