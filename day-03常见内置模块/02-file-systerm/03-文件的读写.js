const fs = require('fs')
// !flag 选项
// w 打开文件写入，默认值；
// w+打开文件进行读写，如果不存在则创建文件；
// r+ 打开文件进行读写，如果不存在那么抛出异常；
// r打开文件读取，读取时的默认值；
// a打开要写入的文件，将流放在文件末尾。如果不存在则创建文件；
// a+打开文件以进行读写，将流放在文件末尾。如果不存在则创建文件

// !encodeing 选项

//!文件写入

// const content = '你好啊,丁国帅'
// fs.writeFile('./abc.txt', content, {flag: 'a'}, (err) => {
//     console.log(err);
// })

// !文件读取
// 默认情况下以 buffer 形式显示
fs.readFile('./abc.txt',{encoding: 'utf8'}, (err, data) => {
    console.log(data);
})
