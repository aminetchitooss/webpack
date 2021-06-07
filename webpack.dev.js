const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    devtool: 'source-map',
    mode: "development",
    output: {
        filename: '[name].bundle.js',
        sourceMapFilename: "[name].js.map"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", //3 Injectd into DOM
                    "css-loader",   //2 css to commonJs
                    "sass-loader"   //1 sass to css
                ]
            }
        ]
    }
});