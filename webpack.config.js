const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: 'main-es.[contenthash].js',
        path: path.resolve(__dirname, "dist")
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
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./src/template.html"
    })]
};