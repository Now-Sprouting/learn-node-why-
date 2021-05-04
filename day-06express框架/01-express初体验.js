const express = require('express')

const app = express()

app.get('/', (req, res, next) => {
    res.end('Hellow Express')
})

app.post('/login', (req, res, next) => {
    res.end('Hellow Express Post')
})

app.listen(9000, () => {
    console.log('express 初体验启动完成');
})