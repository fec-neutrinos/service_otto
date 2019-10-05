const path = require('path');
const srcPath = path.join(__dirname, 'client', 'src');
const buildPath = path.join(__dirname, 'public', 'js');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'app.jsx'),
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};