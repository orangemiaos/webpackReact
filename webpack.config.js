const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 打包源代码的时候，追踪代码位置，从打包文件追踪到源文件中
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
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
        new CleanWebpackPlugin(),
        // html-webpack-plugin 会在dist目录中重新生成一个index.html文件
        // 这个文件的bundle会自动添加到html中，来解决生成包重命名问题
        new HTMLWebpackPlugin({
            title: 'Output Management',
            filename: 'index.html'
        })
    ]
};