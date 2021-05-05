const Koa = require('koa')
// 可以解析 encoded 和 json 数据
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(bodyParser())

app.use((ctx, next) => {
    console.log(ctx.request.body);
})

app.listen(9000, () => {
    console.log('Koa 参数处理服务器启动成功');
})