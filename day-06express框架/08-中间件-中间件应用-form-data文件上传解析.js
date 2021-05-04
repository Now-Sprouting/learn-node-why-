const path = require('path')

const express = require('express')
const multer = require('multer')

const app = express()

// const upload = multer({
//     dest: './uploads/'
// })

// !自定义存储路径
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/upload', upload.array('file'),  (req, res, next) => {
    // console.log(req.file);
    console.log(req.files);
    res.end('upload middle')
})


app.listen(9000, () => {
    console.log('express 中间件应用-form-data文件上传解析启动成功');
})