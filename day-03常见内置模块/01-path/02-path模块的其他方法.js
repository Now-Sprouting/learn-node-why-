const path = require('path')
// !1.获取路径信息
/* const filepath = '/User/ding/abc.txt' 
console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath)); */

// !2.join路径拼接
const basepath = 'User/why'
const filename = 'abc.txt'

const filepath = path.join(basepath, filename)
console.log(filepath);

// !3.resolve路径拼接
// resolve会判断路径最前面是否有 ../ ./如果有的话,会进行一个自动化的路径的拼接
const filepath2 = path.resolve(basepath, filename)
console.log(filepath2);