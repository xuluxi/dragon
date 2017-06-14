var path = require('path');

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
      }
    ]
  }
};
