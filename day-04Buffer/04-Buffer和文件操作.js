const fs = require('fs')


// 读取文本文件
fs.readFile('./foo.txt', (err, data) => {
    console.log(data);
    console.log(data.toString());
})


// 读取图片文件
fs.readFile('./bar.jpg', (err, data) => {
    console.log(data);
    fs.writeFile('./foo.jpg', data, err => {
        console.log(err);
    })
})