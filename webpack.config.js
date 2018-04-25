const path = require('path');
const webpack = require('webpack');
const PACKAGE = require('./package.json');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.module.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: PACKAGE.name + '_' + PACKAGE.version + '.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, use: 'babel-loader', exclude: /node_modules/
      },
      {
        test: /\.html$/, use: [ { loader: 'html-loader', options: { minimize: true } } ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  externals: {
    angular: 'angular'
  }
};