import webpack from "webpack";
import { devMiddleware, hotMiddleware } from "koa-webpack-middleware";
import devConfig from "../../bin/development";
const compile = webpack(devConfig);
import Db from "../../database";

export default function (app, router) {
  // app.use(
  //   devMiddleware(compile, {
  //     // display no info to console (only warnings and errors)
  //     noInfo: true,

  //     // display nothing to the console
  //     // quiet: false,

  //     // switch into lazy mode
  //     // that means no watching, but recompilation on every request
  //     // lazy: true,

  //     // watch options (only lazy: false)
  //     watchOptions: {
  //       aggregateTimeout: 300,
  //       poll: true,
  //     },

  //     // public path to bind the middleware to
  //     // use the same as in webpack
  //     publicPath: devConfig.output.publicPath,

  //     // custom headers
  //     // headers: { "X-Custom-Header": "yes" },

  //     // options for formating the statistics
  //     stats: {
  //       colors: true,
  //     },
  //   })
  // );
  // app.use(
  //   hotMiddleware(compile, {
  //     // log: console.log,
  //     // path: '/__webpack_hmr',
  //     // heartbeat: 10 * 1000
  //   })
  // );

  router
    .get("/", async (ctx, next) => {
      ctx.cookies.set("__user_cookie", encodeURIComponent("张萌"), {
        // 时长为1分钟
        maxAge: 1 * 60 * 1000,
        // path: "/shop",
        // true:仅服务端可以访问，false客户端也可访问（服务端：node，客户端：浏览器document.cookie 无法获取）
        httpOnly: false,
      });
      // render渲染的是 koa-views 定义根目录下的页面
      // index 省略html
      // await ctx.render("index");

      let result = await Db.find("user", {});
      console.log(result);
    })
    .get("/login", (ctx, next) => {
      // ctx.body = "2222";
      // next();
    })
    .get("/news", (ctx, next) => {
      ctx.body = ctx.cookies.get("__user_cookie");
      // next();
    })
    .get("/name", (ctx, next) => {
      ctx.body = "Hello World!";
    })
    .get("/test", (ctx, next) => {
      ctx.body = "test";
    })
    .post("/add", (ctx, next) => {
      ctx.body = ctx.request.body;
      // ...
    })
    .put("/users/:id", (ctx, next) => {
      // ...
    })
    .del("/users/:id", (ctx, next) => {
      // ...
    })
    .all("/users/:id", (ctx, next) => {
      // ...
    });
}
