const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const environment = require("./configuration/environment");

module.exports = {
  entry: {
    app: path.resolve(environment.paths.source, "js", "app.js"),
  },
  output: {
    filename: "js/[name].js",
    path: environment.paths.output,
  },
};

module.exports = {
  mode: "development",
  entry: {
    app: path.resolve(environment.paths.source, "js", "app.js"),
    style: "./src/css/style.css",
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    asyncChunks: true,
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
