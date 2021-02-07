// @babel/register 在babel中可以使用es6语法，ex: import class
require("@babel/register");
require("@babel/polyfill");

const app = require("./server/index.js");
