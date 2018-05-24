const  path  =  require('path');
const  webpack  =  require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fileLoaderImages = {
  outputPath: 'assets/images'
};
const fileLoaderFonts = {
  outputPath: 'assets/fonts'
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
      { test: /\.(jpe?g|png|gif|)$/i, exclude: /node_modules/, loader: 'file-loader',  options: fileLoaderImages },
      { test: /\.(woff|woff2|eot|ttf|otf|svg)$/, exclude: /node_modules/, loader: 'file-loader', options: fileLoaderFonts}
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