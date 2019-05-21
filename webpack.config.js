const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
    target: 'web',
    entry: './src/index.js',
    /*output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },*/
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test:/\.(ttf|eot|woff|woff2|svg)$/,
                use:['file-loader']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin(),
        new VueLoaderPlugin()
    ]
}

    if(isDev){
        config.devServer = {
            port: 8002,
            //host: '0.0.0.0',
            host: '127.0.0.1',
            contentBase: "/src/",
            overlay: {
                errors: true
            },
            hot:true,
            open:true,
            historyApiFallback: true
        }


        config.plugins.push(
            new webpack.HotModuleReplacementPlugin()
        )
    }else{
        config.entry = {
            app: path.join(__dirname, './src/index.js')
        }
        config.output.filename = '[name][122].js'
    }

 module.exports = config