const express = require('express')

const app = express()

app.get('/login', (req, res, next) => {
    res.status(200)
    res.json({naem: 'ding'})
})


app.listen(9000, () => {
    console.log('responce响应结果');
})