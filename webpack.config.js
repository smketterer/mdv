var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    libraryTarget: "commonjs"
  },
  target: 'node',
  externals: [nodeExternals()].concat(['../../dist/build']),
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // other vue-loader options go here
        }
      }
    ]
  }
}
