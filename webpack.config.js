var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        vendor: ['react', 'react-dom'] //需要进库的插件包
    },
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: '[name].[hash].js'
    },
    resolve: {  //别名
        extensions: ['.js', ''],
        alias:{
        }
    },
    // dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 3333,
        contentBase: './src',
        colors: true
    },
    plugins: [ //插件
        //html生成 js引入工具
        new HtmlwebpackPlugin({
            title: 'ReactJs Demo',
            template: path.resolve(__dirname, 'src/index.html'),
            filename: '../index.html',
            inject: 'body'
        }),

        //公用的js包
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js"
        }),

        //复制文件夹到打包文件夹
        new CopyWebpackPlugin([
            {from: path.resolve(__dirname, 'src/img'), to: path.resolve(__dirname, 'dist/img')}
        ]),

        //定义全局环境
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false')),
            __PROD__: JSON.stringify(JSON.parse(process.env.BUILD_PROD || 'false')),
            __LOCAL__: JSON.stringify(JSON.parse(process.env.BUILD_LOCAL || 'false'))
        })
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel?presets[]=es2015'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: ['style', 'css'],
            loader: 'style!css!autoprefixer?{browsers:["last 2 version", "> 1%"]}'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }],
        eslint: {
            configFile: '.eslintrc' //Rules for eslint
        },
        devtool: 'eval-source-map'
    }
}
