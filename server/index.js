/* koa 框架 */
const Koa = require("koa");
const app = new Koa();
/* koa-router */
const Router = require("@koa/router");
const router = new Router();
/* 中间件引入 */
const views = require("koa-views");
const bodyParser = require("koa-bodyparser");
// 不可以let let static = require("koa-static");
// static 是内部变量
const koaStatic = require("koa-static");

/* 定义常量 */
const port = 4000;

/* 文件引用 */
const path = require("path");
import renderTemp from "./middlewares/renderTemp";

// 定义渲染页面的根目录
app.use(
  views(path.resolve(__dirname, "./"), {
    map: { html: "ejs" },
  })
);

// 获取表单提交数据，可直接在 ctx.request.body 中获取
app.use(bodyParser());

// 如果没有koa-static，html里直接写相对地址，路由匹配不到css，js文件
// 配置koa-static后页面加载的文件，静态文件都从css文件里找
// __dirname 返回server 文件夹的地址
app.use(koaStatic(path.resolve(__dirname, "./css")));

// 应用级中间件，无论放在哪都优先于路由级中间件
app.use(async (ctx, next) => {
  // next向下继续匹配
  await next();
  // await next()后是洋葱模式，会在走一遍
  if (ctx.response.status === 404) {
    ctx.body = "我是404";
  }
});

// 路由级中间件
renderTemp(app, router);

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
  console.log("项目已启动");
});
