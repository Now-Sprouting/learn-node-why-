const Router = require('koa-router')

const router = new Router({prefix: '/users'})

router.get('/', (ctx, next) => {
    ctx.response.body = 'user success ~'
})


module.exports = router