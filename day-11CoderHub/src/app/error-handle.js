const errorTypes = require('../constants/error-types')

const errorHandler = (error, ctx) => {
    let status, message
    switch (error.message) {
        case errorTypes.NAME_OR_PASSWORD_IS_REQUESTED:
            status = 400;
            message = '用户名或者密码不能为空~'
            break;
        case errorTypes.USER_NAME_ALREADY_EXIST:
            status = 409;
            message = '用户名已存在~'
            break;
        case errorTypes.USER_DOES_NOT_EXISTS:
            status = 400; // 参数错误
            message = "用户名不存在~";
            break;
        case errorTypes.PASSWORD_IS_INCORRENT:
            status = 400; // 参数错误
            message = "密码是错误的~";
            break;
        case errorTypes.UNAUTHORIZATION:
            status = 401; // 参数错误
            message = "无效的token~";
            break;
        default:
            status = 404;
            message = 'NOT FOUND'
            break;
    }
    ctx.status = status
    ctx.body = message
}

module.exports = errorHandler