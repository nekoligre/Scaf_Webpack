const  path  =  require('path');
const  webpack  =  require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports  =  {
  entry:  {
    app: './src/app.module.js'
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
      // { test: /\.(?!(js|sass|pug)$)([^.]+$)/, exclude: /node_modules/, loader: 'file-loader', options: fileLoaderOptions }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'],{ verbose: true}),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  devtool:  'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist/index.html"),
    port: 3333,
    open:true,
    // historyApiFallback: true,
    // hot: true,
    // inline: true,
    // host: 'localhost',
    proxy: {
      '^/api/*': {
        target: 'http://localhost:8080/api/',
        secure: false
      }
    }
  }
  
}; 