const errorType = require('../constants/error-types')
const service = require('../service/user-service')
const md5password = require('../utils/password-handle')

const verifyUser = async (ctx, next) => {
    // 1.获取用户名和密码
    const {name, password} = ctx.request.body
    // 2.判断本次的用户名和密码不能为空
    if (!name || !password || name === '' || password === '') {
        const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUESTED)
        // 发射错误代码
        return ctx.app.emit('error', error, ctx)
    }
    // 3.判断这次注册的用户名没有被注册过
    // next()
    let res = await service.getUserByName(name)
    if (res.length !== 0) {
        const error = new Error(errorType.USER_NAME_ALREADY_EXIST)
        // 发射错误代码
        return ctx.app.emit('error', error, ctx)
    }
    await next()
}

const passwordHandle = async (ctx, next) => {
    const {password} = ctx.request.body
    ctx.request.body.password = md5password(password)
    await next()
}

module.exports = {
    verifyUser,
    passwordHandle
}