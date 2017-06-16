const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const mount = require('koa-mount')
const static = require('koa-static')
const path = require('path')

const index = require('./routes/index')
const users = require('./routes/users')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(static(path.join(__dirname,'./public')))
//app.use(static(path.join(__dirname,'./node_modules')))

app.use(views(__dirname + '/public', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
/*
app.use(async(ctx) =>{
    ctx.body = 'hello world'
})
*/

// routes
app.use(index.routes(), index.allowedMethods())
//app.use(users.routes(), users.allowedMethods())

app.listen(3001);
module.exports = app
