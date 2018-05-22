const  path  =  require('path');
const  webpack  =  require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fileLoaderOptions = {
  outputPath: 'assets/'
};

module.exports  =  {
  entry:  {
    app: ['./src/vendor/angular.js','./src/app.module.js']
  },
  output:  {
    path: __dirname + '/dist',
    filename:  'bundle.js'
  },
  module:  {
    rules:  [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.pug$/, loaders: ['html-loader', 'pug-html-loader'] },
      { test: /\.sass$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(?!(js|sass|pug|html)$)([^.]+$)/, exclude: /node_modules/, loader: 'file-loader', options: fileLoaderOptions }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  mode: 'none',
  devtool:  'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist/index.html"),
    port: 3333,
    open:true,
    proxy: {
      '^/api/*': {
        target: 'http://localhost:8080/api/',
        secure: false
      }
    }
  }
 
}; 