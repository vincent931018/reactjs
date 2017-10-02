const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 读取同一目录下的 base config
const config = require('./webpack.base.conf');

//scss预处理
config.module.rules.push({
    test: /\.scss$/,
    // 写法和之前基本一致
    loader: ExtractTextPlugin.extract({
        // 必须这样写，否则会报错
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
                sourceMap: false,
                module: true,
                minimize: true,
                localIdentName: "[name]_[local]_[hash:base64:3]"
            }
        }, {
            loader: 'postcss-loader'
        }, {
            loader: 'sass-loader'
        }]
    })
});

//图片处理
config.module.rules.push({
    // 图片格式正则
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    use: [{
        loader: 'url-loader',
        // 配置 url-loader 的可选项
        options: {
            // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
            limit: 10000,
            // 超出限制，创建的文件格式
            // build/images/[图片名].[hash].[图片格式]
            name: 'static/img/[name].[hash].[ext]'
        }
    }]
});

config.plugins.push(
    // 输出的文件路径
    new ExtractTextPlugin("static/css/[name].[hash].css")
);

config.plugins.push(
    // 只删除 dist 文件夹下的 bundle 和 manifest 文件
    new CleanWebpackPlugin(['../dist/**'], {
        // 打印 log
        verbose: true,
        // 删除文件
        dry: false
    }),
);

config.plugins.push(
    // 压缩 JS 代码
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
);

config.plugins.push(
    //文件复制
    new CopyWebpackPlugin([{
        from: path.resolve(__dirname, '../src/static/favicon.ico'),
        to: './static'
    }])
);

module.exports = config;