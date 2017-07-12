var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index: './client/page/home/index.js',
    login: './client/page/home/login/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './client/page/home/dist'),
    publicPath: path.join(__dirname, './client/page/home/assets/')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader','sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};
