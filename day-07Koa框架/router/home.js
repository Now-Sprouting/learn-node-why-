const Router = require('koa-router')

const router = new Router({prefix: '/home'})

router.get('/:id', (ctx, next) => {
    console.log(ctx.request.url);
    console.log(ctx.request.query);
    console.log(ctx.request.params);
    ctx.response.body = 'home success ~'
})

module.exports = router