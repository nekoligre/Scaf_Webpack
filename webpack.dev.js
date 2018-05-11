const  path  =  require('path');
const  webpack  =  require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports  =  {
   entry:  {
    app:  path.join(__dirname,  './src/app.module.js'),
    vendor:  ['angular']
  },
  output:  {
    filename:  '[name].bundle.js',
    sourceMapFilename:  '[name].bundle.js.map'
  },
  module:  {
    rules:  [
      {  test:  /\.js$/,  loader:  'babel-loader',  exclude:  /node_modules/  },
      {  test:  /\.pug$/,  loaders:  ['html-loader',  'pug-html-loader'] },
      {  test:  /\.sass$/,  loaders:  ['style-loader',  'css-loader',  'sass-loader'] }
    ]
  },
  mode:  'none',
  devtool:  'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 3000,
    proxy: {
      '^/api/*': {
        target: 'http://localhost:8080/api/',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new CleanWebpackPlugin(['dist'],{ verbose: true}),
    new HtmlWebpackPlugin({
      hash:true,
      minify:true,
      showErrors:true,
      filename: 'index.html'
    })
  ]
}; 