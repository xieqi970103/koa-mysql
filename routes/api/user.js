const Router = require('koa-router')
const router = new Router();
const mysql = require('../../mysql')

// test
router.get('/test', async ctx => {
    ctx.status = 200;
    let data = await mysql.query()
    ctx.body = {
        "code": 1,
        "data": data,
        "mesg": 'ok'
    }
})
// 登录
// router.post('/login', async ctx => {
//     ctx.body = ctx.request.body;
//     ctx.status = 200;
//     let data = await mysql.query()
//     ctx.body = {
//         "code": 1,
//         "data": data,
//         "mesg": 'ok'
//     }
// })

module.exports = router.routes();