const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        //入口文件
        app: [
            './index.jsx' // 这里是你的入口文件
        ],
        //公共文件
        ventor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux', 'axios']
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // 必须使用绝对地址，输出文件夹
        filename: "./static/js/[name]-[hash].js" // 打包后输出文件的文件名
    },
    resolve: {
        // 文件扩展名，写明以后就不需要每个文件写后缀
        extensions: ['.js', '.jsx', '.css'],
        // 路径别名
        alias: {
            '@': path.resolve(__dirname, '../src'),
            'pages': path.resolve(__dirname, '../src/pages'),
            'state': path.resolve(__dirname, '../src/state'),
            'common': path.resolve(__dirname, '../src/common'),
            'static': path.resolve(__dirname, '../src/static'),
            'components': path.resolve(__dirname, '../src/components')
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
        // 我们这里将之前的 HTML 文件当做模板
        // 注意在之前 HTML 文件中请务必删除之前引入的 JS 文件
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [{
            // js 文件才使用 babel
            test: /\.jsx?$/,
            // 使用哪个 loader
            use: 'babel-loader',
            // 不包括路径
            exclude: /node_modules/
        }]
    }
}