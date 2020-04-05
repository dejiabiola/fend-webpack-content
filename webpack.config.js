const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
  // output: { ...output options },
  module: {
    rules: [
      {
        test: '/\.js$',
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}