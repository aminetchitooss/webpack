const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "./assets/[name].[hash].[ext]",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",   //2 css to commonJs
                    "sass-loader"   //1 sass to css
                ]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css"
    })]
});