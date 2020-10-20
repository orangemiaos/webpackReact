const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// webpack-dev-server 实时更新修改的内容，不需要每次都重新build

module.exports = {
    entry: {
        app: './src/index.js',
        another: './src/another.js'
    },
    output: {
        // name是文件名
        // chunk就模块，chunkhash也就是根据模块内容计算出的hash值
        filename: '[name].[chunkhash].js',
        // hash是编译对象计算所得，而不是具体的项目文件计算所得。以上配置的编译输出文件，所有的文件名都会使用相同的hash指纹。
        // 如果有三个js文件，任何一个改动都会影响另外两个文件的最终文件名。上线后，另外两个文件的浏览器缓存也全部失效，所以尽量使用chunkhash
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // 处理css文件
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理图片
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
            // 处理字体
            { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
            // 处理xml
            { test: /\.xml$/, use: ['xml-loader'] }
        ]
    },
    plugins: [
        // 每次构建前清理 /dist 文件夹
        new CleanWebpackPlugin(),
        // html-webpack-plugin 会在dist目录中重新生成一个index.html文件
        // 这个文件的bundle会自动添加到html中，来解决生成包重命名问题
        new HTMLWebpackPlugin({
            title: 'code split',
            filename: 'index.html'
        })
    ],
    optimization: {
        // 如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中
        // 我们通过使用 splitChunks 来移除重复的模块。
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "common",// 指定公共 bundle 的名称。
                    chunks: "all", //async异步代码分割 initial同步代码分割 all同步异步分割都开启
                    minChunks: 2,
                    priority: 10,
                }
            }
        }
    }
};