import Router from "@koa/router";
const router = new Router();

router.get("/", async (ctx, next) => {
  ctx.body = "user 首页";
});

router.get("/one", async (ctx, next) => {
  ctx.body = "admin one";
});

router.get("/two", async (ctx, next) => {
  ctx.body = "admin two";
});

//配前缀
router.use("/user", router.routes());

module.exports = router;
