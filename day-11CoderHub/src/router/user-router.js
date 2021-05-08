const Router = require('koa-router')

const {
    create
} = require('../controller/user-controller')
const userRouter = new Router({prefix: '/users'})
const {
    verifyUser,
    passwordHandle
} = require('../middleware/user-middleware')

// 用户注册
userRouter.post('/', verifyUser, passwordHandle,  create)

module.exports = userRouter