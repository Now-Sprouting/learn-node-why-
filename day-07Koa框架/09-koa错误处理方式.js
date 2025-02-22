const Koa = require('koa')


const app = new Koa()

app.use((ctx, next) => {
    const isLogin = false
    if (!isLogin) {
        ctx.app.emit('error', new Error('您还没有登录~'), ctx)
    }
})

app.on('error', (err, ctx) => {
    ctx.status = 401
    ctx.body = err.message
})

app.listen(9000, () => {
    console.log('Koa 错误处理服务器启动成功');
})