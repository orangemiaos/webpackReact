import Router from "@koa/router";
const router = new Router();

router.get("/", async (ctx, next) => {
  // 配置倆 koa-views 才可以使用ctx.render
  await ctx.render("index");
});

module.exports = router;
