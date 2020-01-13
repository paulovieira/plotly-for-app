'use strict';

let Path = require('path');
let Webpack = require('webpack');
let WebpackNotifierPlugin = require('webpack-notifier');

let inputDir = Path.resolve('src');
let outputdDir = Path.resolve('dist');

let config = {
  mode: 'development',
  //mode: 'production',

  entry: Path.join(inputDir, 'index.js'),

  output: {
    path: outputdDir,
    filename: `plotly-for-app.js`,
  },

  plugins: [
    new WebpackNotifierPlugin(),
  ],

  module: {
    rules: [
      {
        test: Path.resolve(__dirname, 'node_modules/es6-promise'),
        use: 'null-loader',
      },
      {
        test: Path.resolve(__dirname, 'node_modules/polybooljs'),
        use: 'null-loader',
      },
      
      {
        test: /\.js$/,
        use: [
          'ify-loader',
          'transform-loader?plotly.js/tasks/compress_attributes.js',
          ]
      },
    ]
  },
  
  devtool: false,
};

module.exports = config;
