const get = require('./routes/get');
const Koa = require('koa');
const Router = require('@koa/router');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

router.get('/forecast', async (ctx, next) => {
  const forecast = await get.forecast.city();
  ctx.body = forecast.data;
});

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3030);

console.log('API Server listening on port :3030');