const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const PORT = '3333'

// 读取同一目录下的 base config
const config = require('./webpack.base.conf');

//webpack-dev-server配置
config.devServer = {
    port: PORT,
    hot: true,
    open: true,
    inline: true
}

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
            name: 'static/img/[name].[ext]'
        }
    }]
});

// Hot module replacement
Object.keys(config.entry).forEach((key) => {
    // 这里有一个私有的约定，如果 entry 是一个数组，则证明它需要被 hot module replace
    if (Array.isArray(config.entry[key])) {
        config.entry[key].unshift(
            'webpack-dev-server/client?http://0.0.0.0:' + PORT,
            'webpack/hot/only-dev-server'
        );
    }
});

//source-map设置 生成 source-map，用于打断点，这里有好几个选项
config.devtool = '#cheap-module-eval-source-map';

config.plugins.push(
    // 输出的文件路径
    new ExtractTextPlugin("static/css/[name].[hash].css")
);

config.plugins.push(
    // 压缩提取出的 CSS，并解决ExtractTextPlugin分离出的 JS 重复问题
    new OptimizeCSSPlugin({
        cssProcessorOptions: {
            safe: true
        }
    })
);

config.plugins.push(
    //开启全局的模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin()
);

config.plugins.push(
    //保证出错时页面不阻塞，且会在编译结束后报错
    new webpack.HotModuleReplacementPlugin()
);

module.exports = config;