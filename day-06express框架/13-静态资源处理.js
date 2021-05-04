const express = require('express')
const userRouter = require('./routes/users')


const app = express()

app.use(express.static('./build'))

app.listen(9000, () => {
    console.log('静态资源服务器');
})