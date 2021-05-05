const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
    // ctx.response.body = "Hello Koa"

    // ctx.response.body = {
    //     name: 'ding',
    //     age: 18
    // }

    ctx.response.body = [1, 2, 3]

    // 设置状态码
    ctx.status = 400
})

app.listen(9000, () => {
    console.log('Koa 响应数据服务器');
})