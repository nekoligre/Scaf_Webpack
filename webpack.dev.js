const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src/app.module.js'),
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
      { test: /\.pug$/, loader: 'pug-loader', include: path.join(__dirname, '/src') },
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