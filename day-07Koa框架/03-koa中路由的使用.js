const Koa = require('koa')
const userRouter = require('./router/user')

const app = new Koa()

app.use(userRouter.routes())

app.listen(9000, () => {
    console.log('Koa 中间件服务器启动成功');
})