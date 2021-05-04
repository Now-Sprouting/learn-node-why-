const express = require('express')
const userRouter = require('./routes/users')


const app = express()

app.use('/users', userRouter)

app.listen(9000, () => {
    console.log('路由的使用');
})