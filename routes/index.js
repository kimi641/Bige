const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: '碧歌传媒会展传播机构',
        lib: '/node_module',
        static: '/public'
    })
})

router.get('/award', async (ctx,next) => {
    await  ctx.render('award',{
        title: '会奖管理'
    })
})

router.get('/exhibition', async (ctx,next) =>{
    await  ctx.render('exhibition',{
        title: '展览展示'
    })
})

router.get('/festival', async(ctx,next) => {
    await ctx.render('festival', {
        title: '节庆赛事'
    })
})

router.get('/ad', async(ctx,next) =>{
  await ctx.render('ad', {
      title: '广告工程'
  })
})

router.get('/marketing', async (ctx,next) =>{
    await  ctx.render('marketing', {
        title: '整合营销'
    })
})

router.get('/partner', async (ctx,next) =>{
    await  ctx.render('partner', {
        title: '战略合作'
    })
})

router.get('/join', async (ctx,next) =>{
    await  ctx.render('join', {
        title: '加入我们'
    })
})

router.get('/about', async (ctx,next) =>{
    await  ctx.render('about', {
        title: '关于我们'
    })
})

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router
