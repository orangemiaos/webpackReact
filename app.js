/* koa 框架 */
const Koa = require("koa");
const app = new Koa();
/* 中间件引入 */
const views = require("koa-views");
const bodyParser = require("koa-bodyparser");
// 不可以let let static = require("koa-static");
// static 是内部变量
const koaStatic = require("koa-static");

/* 文件引用 */
const path = require("path");
// import renderTemp from "./server/middlewares/renderTemp";

import webpack from "webpack";
import { devMiddleware, hotMiddleware } from "koa-webpack-middleware";
import devConfig from "./bin/webpack.config.dev.js";
const compile = webpack(devConfig);

// 定义渲染页面的根目录
const assetsDir = path.resolve(__dirname, "./dist");
app.use(views(assetsDir, { map: { html: "ejs" } }));

// 获取表单提交数据，可直接在 ctx.request.body 中获取
// app.use(bodyParser());

// 如果没有koa-static，html里直接写相对地址，路由匹配不到css，js文件
// 配置koa-static后页面加载的文件，静态文件都从css文件里找
// __dirname 返回server 文件夹的地址
// app.use(koaStatic(path.resolve(__dirname, "../dist")));

// 应用级中间件，无论放在哪都优先于路由级中间件
app.use(async (ctx, next) => {
  // 遇到next向下继续匹配，匹配只有在执行await next()之后的语句
  await next();
  // await next()后是洋葱模式，会在走一遍
  let code = ctx.response.status;
  if (code === 404) {
    ctx.body = "我是404";
  }
  console.log(ctx.render);
  await ctx.render("index");
});

// 可以访问内存文件，内存输出在webpack-dev-config里
app.use(
  devMiddleware(compile, {
    noInfo: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
    },
    publicPath: devConfig.output.publicPath,
    stats: {
      colors: true,
    },
  })
);
app.use(
  hotMiddleware(compile, {
    // log: console.log,
    // path: '/__webpack_hmr',
    // heartbeat: 10 * 1000
  })
);

/* router 文件 */
const index = require("./routes/index");
const users = require("./routes/users");
app.use(index.routes()).use(index.allowedMethods());
app.use(users.routes()).use(users.allowedMethods());



module.exports = app;
