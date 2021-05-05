const Koa = require('koa')


const app = new Koa()

app.use((ctx, next) => {
    ctx.response.body = 'Hello Koa'
})

app.listen(9000, () => {
    console.log('Koa 初体验服务器启动成功');
})