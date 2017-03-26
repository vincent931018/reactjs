var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname,'src/index.jsx'),
        vendor: ['react', 'react-dom'] //需要进库的插件包
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        //publicPath: './',
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['scss','jsx','.js', ''],//默认扩展名
        alias: {}//默认绝对路径
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
            filename: 'index.html',
            inject: 'body'
        }),

        //公用的js包
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "js/vendor.js"
        }),

        new ExtractTextPlugin("main.css")

    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loaders: ['babel?presets[]=es2015'],
            exclude: /node_modules/
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel',
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'file?name=img/[name].[ext]'
        },{
            test: /\.scss$/,
            exclude: /node_modules/,
            include: /src/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
        },{
            test:/\.(eot|ttf|woff|woff2|svg)$/,
            exclude: /node_modules/,
            include: /src/,
            loader:'url?limit=8192&name=fonts/[name].[ext]'
        }],
        eslint: {
            configFile: '.eslintrc' //Rules for eslint
        },
        devtool: 'cheap-source-map'
    }
}
