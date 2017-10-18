const { join }   = require('path');
const webpack    = require('webpack');

const argv = require('yargs').argv;
const app  = argv.app || 'react';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: [
        join(__dirname, '../index.js')
    ],
    output: {
        path: join(__dirname, '../build'),
        filename: 'index.js'
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings: false
        //     }
        // })
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: join(__dirname, '../')
        }]
    }
};
