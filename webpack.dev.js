const merge =require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
   devtool: 'inline-source-map',
   devServer: {
        compress: true,
        disableHostCheck: true,
        host: '0.0.0.0',
        port: '9081',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});