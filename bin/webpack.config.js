const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // path.resolve 每个参数相当于执行一次cd操作
  // cd /  ,  cd static...
  // __dirname获取当前模块文件所在目录的完整绝对路径
  entry: path.resolve(__dirname, "../static/src/app/index.js"),
  output: {
    // 输出文件名
    filename: "index.js",
    // 输出路径
    path: path.resolve(__dirname, "../dist"),
  },
  // 打包源代码的时候，追踪代码位置，从打包文件追踪到源文件中
  devtool: "inline-source-map",
  // 告知 webpack-dev-server，将 dist 目录下的文件 serve 到 localhost:3000下（译注：serve，将资源作为 server 的可访问文件）
  // server 为其它电脑和用户提供服务的一台主机
  // webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。如果你的页面希望在其他不同路径中找到 bundle 文件，则可以通过 dev server 配置中的 publicPath 选项进行修改。
  devServer: {
    // path.join 是路径拼接
    contentBase: path.join(__dirname, "dist"),
    port: 3000,
  },
  module: {
    rules: [
      // 处理css文件
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      // 处理图片
      { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] },
      // 处理字体
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"] },
      // Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
      // babel-loader @babel/core 共同存在
      // @babel/preset-react 识别jsx 语法
      // @babel/plugin-proposal-class-properties 识别箭头函数
      {
        test: /\.js|jsx$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    // html-webpack-plugin 会在dist目录中重新生成一个index.html文件
    // 这个文件的bundle会自动添加到html中，来解决生成包重命名问题
    new HTMLWebpackPlugin({
      // 可在模版中配置
      // title: "文件模版测试",
      // filename: "index.html",
      // 定义模版，为了根结点
      template: path.resolve(__dirname, "../static/index.html"),
      // true则将唯一的webpack编译哈希值附加到所有包含的脚本和CSS文件中。这对于清除缓存很有用
      hash: true,
      // 错误详细信息将写入HTML页面
      showErrors: true,
    }),
    // 在每次构建前清理 /dist 文件夹
    new CleanWebpackPlugin(),
  ],
  resolve: {
    // 快捷路径
    alias: {
      "@": path.resolve(__dirname, `../static/src`),
    },
    //省略后缀名
    extensions: [".js", ".jsx", ".less", ".json"],
  },
};
