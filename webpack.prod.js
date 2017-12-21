const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
   plugins: [
       new UglifyPlugin({
           sourceMap: true,
           uglifyOptions: {
               compress: true,
               mangle: false
           }
       }),
       new webpack.DefinePlugin({
           'process.env.NODE_ENV': JSON.stringify('production')
       })
   ]
});