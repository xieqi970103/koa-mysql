const Koa = require('koa')
const config = require('./config/default')
const mysql = require('./mysql')

// 实例化koa
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

// 引入user.js
const users = require('./routes/api/user.js')

// 路由
router.get("/", async ctx =>{
    let data = await mysql.query()
    ctx.body = {
        "code": 1,
        "data": data,
        "mesg": 'ok'
    }
})

// 配置路由地址
router.use("/api/user", users)

// 配置路由
app.use(router.routes()).use(router.allowedMethods());
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})



// app.use(json())
// app.use(async (ctx) => {
//     let data = await mysql.query()
//     ctx.body = {
//         "code": 1,
//         "data": data,
//         "mesg": 'ok'
//     }
    
// })


// app.listen(config.port)

// console.log(`listening on port ${config.port}`)