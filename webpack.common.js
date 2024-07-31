

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./source/index.js",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname, "dist"),
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./source/index.html",
            inject : "body",
        }),
    ],
};