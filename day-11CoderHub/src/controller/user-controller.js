const service = require('../service/user-service')

class UserController {
    async create(ctx, next) {
        // 获取用户数据
        const user = ctx.request.body
        // 数据库查询数据
        const result =  await service.create(user)
        // 返回数据
        ctx.body = result
    }
}

module.exports = new UserController()