const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    filename: "app.[hash:8].js",
    path: path.resolve(__dirname),
  },
  devServer: {
    contentBase: path.join(__dirname),
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hello Apps",
      template: "./src/index.html",
    }),
  ],
};