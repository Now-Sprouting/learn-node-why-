const Koa = require('koa')
const homeRouter = require('./router/home')

const app = new Koa()

app.use(homeRouter.routes())

app.listen(9000, () => {
    console.log('Koa 参数处理服务器启动成功');
})