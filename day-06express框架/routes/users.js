const express = require('express')

const router = express.Router()

router.get('/', (req, res, cb)=> {
    res.json(['ding', 'zhang'])
})

module.exports = router