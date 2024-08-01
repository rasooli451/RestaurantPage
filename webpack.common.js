

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./source/index.js",
    output : {
        filename : "bundle.js",
        path : path.resolve(__dirname, "dist"),
    },
    module : {
      rules : [
        {
            test : /\.css$/i,
            use : ["style-loader", "css-loader"],
        },
        {
            test : /\.(png|svg|jpg|jpeg|gif)$/i,
            type : "asset/resource",
        },
        {
            test : /\.html$/,
            loader : "html-loader",
        }
      ],  
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : "./source/index.html",
            inject : "body",
        }),
    ],
};