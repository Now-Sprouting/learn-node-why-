const Koa = require('koa')


const app = new Koa()

app.use((ctx, next) => {
    if (ctx.request.url === '/login') {
        if (ctx.request.method === 'GET') {
            ctx.response.body = 'login success ~'
        }
    } else {
        ctx.response.body = 'Hello Koa'
    }
})

app.listen(9000, () => {
    console.log('Koa 中间件服务器启动成功');
})