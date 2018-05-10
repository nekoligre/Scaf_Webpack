const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/app.module.js'),
    vendor: ['angular']
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    devtoolLineToLine: true,
    pathinfo: true,
    sourceMapFilename: '[name].bundle.js.map'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.pug$/, loaders: ['html-loader', 'pug-html-loader'] },
      { test: /\.sass$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, '/demo'),
    compress: true
  },
  devtool: 'source-map'
};