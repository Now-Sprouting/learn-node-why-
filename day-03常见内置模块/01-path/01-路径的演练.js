// !有时候在拼接路径时因为操作系统的不同所以不确定是   / 还是 \ 所以要使用到 path内置模块
const path = require('path')

const basePath = '/User/why'
const pathname = 'abc.txt'

// const path = basePath + '/' + '' /* 这种拼接方法不适用所有操作系统 */

const filename = path.resolve(basePath, pathname)
console.log(filename);