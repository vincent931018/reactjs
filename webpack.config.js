var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

module.exports = {
    entry: {
        //入口文件
        app: './index.jsx',
        //公共文件
        ventor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // 必须使用绝对地址，输出文件夹
        filename: "./static/js/[name]-[hash].js" // 打包后输出文件的文件名
    },
    resolve: {
        // 文件扩展名，写明以后就不需要每个文件写后缀
        extensions: ['.js', '.jsx', '.css'],
        // 路径别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'pages': path.resolve(__dirname, 'src/pages'),
            'state': path.resolve(__dirname, 'src/state'),
            'common': path.resolve(__dirname, 'src/common'),
            'static': path.resolve(__dirname, 'src/static'),
            'components': path.resolve(__dirname, 'src/components')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            // vendor 的意义和之前相同
            // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以加快打包速度
            names: ['vendor', 'manifest'],
            // 配合 manifest 文件使用
            minChunks: Infinity
        }),
        // 只删除 dist 文件夹下的 bundle 和 manifest 文件
        new CleanWebpackPlugin(['dist/**'], {
            // 打印 log
            verbose: true,
            // 删除文件
            dry: false
        }),
        // 我们这里将之前的 HTML 文件当做模板
        // 注意在之前 HTML 文件中请务必删除之前引入的 JS 文件
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // 输出的文件路径
        new ExtractTextPlugin("static/css/[name].[hash].css"),
        // 压缩提取出的 CSS，并解决ExtractTextPlugin分离出的 JS 重复问题
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        // 压缩 JS 代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //文件复制
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'src/static/favicon.ico'),
            to: './static'
        }])
    ],
    module: {
        rules: [{
            // js 文件才使用 babel
            test: /\.jsx?$/,
            // 使用哪个 loader
            use: 'babel-loader',
            // 不包括路径
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            // 写法和之前基本一致
            loader: ExtractTextPlugin.extract({
                // 必须这样写，否则会报错
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }, {
                    loader: 'sass-loader'
                }]
            })
        }, {
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
        }]
    },
    // 生成 source-map，用于打断点，这里有好几个选项
    devtool: '#cheap-module-eval-source-map',
}