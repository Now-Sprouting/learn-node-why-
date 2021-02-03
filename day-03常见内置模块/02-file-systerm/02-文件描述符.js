const fs = require('fs')

// 获取文件描述符
fs.open('./abc.txt', (err, fd) => {
    if (err) {
        console.log(err);
        return
    }
    fs.fstat(fd, (err, info) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(info);
    })
})