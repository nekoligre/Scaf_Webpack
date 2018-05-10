const  path  =  require('path');
const  webpack  =  require('webpack');

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
  devtool:  'source-map'
}; 