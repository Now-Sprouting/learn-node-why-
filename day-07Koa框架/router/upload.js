const Router = require('koa-router')
const multer = require('koa-multer')
const path = require('path')


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

const router = new Router({prefix: '/upload'})

router.post('/', upload.single('avatar') ,  (ctx, next) => {
    console.log(ctx.req.file);
    ctx.response.body = 'upload success ~'
})


module.exports = router