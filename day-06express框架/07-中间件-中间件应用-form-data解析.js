const express = require('express')
const multer = require('multer')

const app = express()

const upload = multer()

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// !对非文件类型进行解析
app.post('/login', app.use(upload.any()),  (req, res, next) => {
    console.log('home middle1 注册成功');
    console.log(req.body);
    res.end('login middle')
})


app.listen(9000, () => {
    console.log('express 中间件应用-form-data解析启动成功');
})