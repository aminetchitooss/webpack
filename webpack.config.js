const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
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
    }
};