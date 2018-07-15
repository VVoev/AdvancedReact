const path = require('path');
const webpack = require('webpack');

const config = {
    resolve:{
        modules:[
            path.resolve('./lib'),
            path.resolve('./node_modules'),
        ]
    },
    entry: [
        'babel-polyfill',
        './lib/renderers/dom.js'
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: { loader: 'babel-loader' },
            exclude: /node_modules/
        }]
    },
};

module.exports = config;