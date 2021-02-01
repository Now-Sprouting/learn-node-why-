const name = 'ding'
const age = 12
let message = 'hello node'
function sayHello(name) {
    console.log(name);
}


exports.name = name
exports.age = age
exports.message = message
exports.sayHello = sayHello


module.exports = {
    name: 'abc',
    age: 20,
    message: '你好'
}

