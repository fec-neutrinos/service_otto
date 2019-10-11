const path = require('path');
const srcPath = path.join(__dirname, 'client', 'src');
const buildPath = path.join(__dirname, 'public', 'js');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'app.jsx'),
  output: {
    path: buildPath,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        // options: {
        //   presets: [[
        //     "@babel/env",
        //     "@babel/react",
        //   ]]
        // }
      }
    ]
  }
};