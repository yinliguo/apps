const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDev = process.env.NODE_ENV == 'development';

module.exports = {
  entry: './src/app.js',
  mode: isDev ? 'development' : 'production',
  output: {
    filename: 'app.[fullhash:8].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: path.join(__dirname),
    port: 9000,
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello Apps',
      template: './src/index.html',
      filename: isDev ? 'index.html' : '../index.html',
    }),
  ],
};
