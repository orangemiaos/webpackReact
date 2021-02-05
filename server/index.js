let Koa = require("koa");
let app = new Koa();

let Router = require("@koa/router");
let router = new Router();

let port = 4000;

router
  // .get("*", (ctx, next) => {
  //   ctx.body = "我是*";
  // })
  .get("/name", (ctx, next) => {
    ctx.body = "Hello World!";
  })
  .get("/test", (ctx, next) => {
    ctx.body = "test";
  })
  .post("/users", (ctx, next) => {
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
