const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    // 打包源代码的时候，追踪代码位置，从打包文件追踪到源文件中
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        open: true
    },
})