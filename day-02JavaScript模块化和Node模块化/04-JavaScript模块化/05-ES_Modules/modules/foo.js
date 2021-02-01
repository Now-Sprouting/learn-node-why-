// $ES6 模块化的三种方式
// !1. export
// export let name = 'ding'

// !2. export {}  注:{}不是对象 
let name = 'ding'
let age = 18
export {
    name,
    age
}

// !3. export {} as 更改别名
// let name = 'ding'
// let age = 18
// export {
//     name as myName,
//     age as myAge
// }