var path = require('path');

module.exports = {
  entry: './client/page/home/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/page/home/dist')
  }
};
