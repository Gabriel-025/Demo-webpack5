const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const fs = require("fs");
const glob = require("glob");

const folders = glob.sync("./src/**/*.*").reduce((acc, path) => {
  const entry = path.replace("./src/", "");
  acc[entry] = path;
  return acc;
}, {});

console.log(folders);
module.exports = {
  mode: "production",
  entry: folders,
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  output: {
    filename: "[name]",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
};
