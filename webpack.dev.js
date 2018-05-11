const  path  =  require('path');
const  webpack  =  require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let fileLoaderOptions = {
  outputPath: 'assets/'
};

module.exports  =  {
  entry:  {
    vendor:  ['angular'],
    app:  path.join(__dirname,  './src/app.module.js')
  },
  output:  {
    filename:  '[name].bundle.js',
    sourceMapFilename:  '[name].bundle.js.map'
  },
  module:  {
    rules:  [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.pug$/, loaders: ['html-loader', 'pug-html-loader'] },
      { test: /\.sass$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(?!(js|sass|pug)$)([^.]+$)/, exclude: /node_modules/, loader: 'file-loader', options: fileLoaderOptions }
    ]
  },
  mode:  'none',
  devtool:  'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
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