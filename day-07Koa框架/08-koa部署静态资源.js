const Koa = require('koa')
const staticAccest = require('koa-static')


const app = new Koa()

app.use(staticAccest('./build'))

app.listen(9000, () => {
    console.log('Koa 部署静态资源服务器启动成功');
})