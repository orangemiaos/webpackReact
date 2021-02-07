let Koa = require("koa");
let app = new Koa();
let path = require("path");

let Router = require("@koa/router");
let router = new Router();
let views = require("koa-views");
let bodyParser = require("koa-bodyparser");
let static = require("koa-static");
let port = 4000;

// 定义渲染页面的根目录
app.use(
  views(path.resolve(__dirname, "./"), {
    map: {
      html: "ejs",
    },
  })
);

// 获取表单提交数据，可直接在 ctx.request.body 中获取
app.use(bodyParser());

// 如果没有koa-static，html里直接写相对地址，路由匹配不到css，js文件
// 配置koa-static后页面加载的文件，静态文件都从css文件里找
// __dirname 返回server 文件夹的地址
app.use(static(path.resolve(__dirname, "./css")));

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
    await ctx.render("index");
  })
  .get("/shop", (ctx, next) => {
    ctx.body = ctx.cookies.get("__user_cookie");
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

app.use(router.routes()).use(router.allowedMethods());
app.listen(port, () => {
  console.log("项目已启动");
});
