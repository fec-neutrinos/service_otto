const path = require('path');
const srcPath = path.join(__dirname, 'client', 'src');
const buildPath = path.join(__dirname, 'public');

module.exports = {
  target: 'web',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public', 'dev'),
    watchContentBase: true,
    // publicPath: '/dev/',
    compress: true,
    port: 9001
  },
  context: srcPath,
  entry: {
    app: [path.join(srcPath, 'js', 'App.jsx')]
  },
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