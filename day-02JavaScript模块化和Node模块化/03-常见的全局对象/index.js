// $特殊的全局对象
// 特殊的全局对象是指模块中的变量,每个模块中都有,只是看起来像全局变量
// 在命令行交互中是不可以使用的
// 包括: __dirname __filename exports  module  require()



// !当前文件的绝对路径
// console.log(__dirname);
// !当前文件的绝对路径 + 文件名
// console.log(__filename);


// $常见的全局对象
// !process对象 process对象中提供了 node '进程' 中的相关信息,比如 node 的运行环境,参数信息等
// !console
// !定时器函数
/* console.log('开始');
setTimeout(() => {
    console.log('setTimeout');
})
setInterval(() => {
    console.log('setInterval');
}, 1000)
setImmediate(() => {
    console.log('setImmediate');
})
process.nextTick(() => {
    console.log('nextTick');
}) */
// !global:正常打印显示不全 global对象, 通过 global.两次 Tab键打印出全部
// 在浏览器中定义的全局变量都会定义在 window上面(因为在浏览器中没有模块的概念),比如说:
/* var name = 'ding'
console.log(window.name); */

// 在 node 中定义全局变量不会追加到 global中
var name = 'ding'
console.log(global.name);