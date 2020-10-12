const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
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
    }
};