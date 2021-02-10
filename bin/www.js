// @babel/register 在babel中可以使用es6语法，ex: import class
require("@babel/register");
require("@babel/polyfill");

const app = require("../app");
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("项目已启动");
});
