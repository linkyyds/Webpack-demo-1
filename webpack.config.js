const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const base = require("./webpack.config.base.js");

module.exports = {
  ...base, //...的意思是把base的所有属性抄过来。
  devtool: "inline-source-map",
  devServer: { static: "./dist" },
  mode: "development",
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
