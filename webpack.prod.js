const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/vendor/angular.js', './src/app.module.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')

  },
  module: {
    rules:  [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.pug$/, loaders: ['html-loader', 'pug-html-loader'] },
      { test: /\.sass$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['build'], {}),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};