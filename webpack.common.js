const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "main": [
            'babel-polyfill',
            'font-awesome/css/font-awesome.css', // preload font awesome change from url to all url-loade
            './src/app.js'
        ]
    },
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // CSS
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.sass$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            // IMAGE
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            // HTML
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            },
            // FONT
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            // FONT FILE LOADER
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            title: 'Production'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'bin'),
        publicPath: '/bin/', // need to config public Path in order to hot reload html
        filename: 'app.bundle.js'
    },
};

