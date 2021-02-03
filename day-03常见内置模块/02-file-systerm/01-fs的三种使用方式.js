const fs = require('fs')
// 案例: 读取文件的信息
const filepath = './abc.txt'

//!方式1: 同步形式
/* console.log('前续需要执行的代码');
const info = fs.statSync(filepath)
console.log('后续需要执行的代码');
console.log(info); */

// !方式2: 异步操作
/* fs.stat(filepath, (err, info) => {
    if(err){
        console.log(err);
    }
    console.log(info);
})
console.log('后续需要执行的代码'); */

// !方式3: Promise方式
fs.promises.stat(filepath).then((info)=>{
    console.log(info);
}).catch((err)=> {
    console.log(err);
})
console.log('后续需要执行的代码');