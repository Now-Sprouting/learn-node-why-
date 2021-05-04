const express = require('express')

const app = express()

app.get('/home/:id/:name', (req, res, next) => {
    console.log(req.params);
    res.end('Hello World')
})

app.get('/login', (req, res, next) => {
    console.log(req.query);
    res.end('Hello Login')
})


app.listen(9000, () => {
    console.log('request 参数解析');
})