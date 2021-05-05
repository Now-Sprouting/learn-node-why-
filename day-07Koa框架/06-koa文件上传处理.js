const Koa = require('koa')
const uploadRouter = require('./router/upload')

const app = new Koa()

app.use(uploadRouter.routes())

app.listen(9000, () => {
    console.log('Koa 中间件服务器启动成功');
})