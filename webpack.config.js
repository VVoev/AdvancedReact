const path = require('path');
const webpack = require('webpack');

const config = {

    entry: [
        'babel-polyfill',
        './lib/components/Index.js'
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