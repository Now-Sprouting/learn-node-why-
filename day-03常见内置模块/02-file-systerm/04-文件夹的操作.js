const fs = require('fs')
const path = require('path')

// !1.创建文件夹
const dirname = './ding'
if (!fs.existsSync(dirname)) {
    fs.mkdir(dirname, err => {
        console.log(err);
    })
}

// !2.读取文件夹中的所有文件

// function getFiles(dir){
//     fs.readdir(dir, {withFileTypes: true}, (err, files) => {
//         for(let file of files) {
//             if (file.isDirectory()) {
//                 const filePath = path.resolve(dir, file.name)
//                 getFiles(filePath)
//             }else {
//                 console.log(file.name);
//             }
//         }
//     })
// }
// getFiles(dirname)

// !3.文件夹的重命名
// fs.rename('./ding', './curry', err => {
//     console.log(err);
// })