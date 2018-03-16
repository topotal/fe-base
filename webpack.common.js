const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const projectRootPath = path.resolve(__dirname, './');
const assetsPath = path.resolve(projectRootPath, './dist');

module.exports = {
  entry: {
    index: [
      'babel-polyfill',
      'whatwg-fetch',
      `${__dirname}/src/index.js`
    ],
  },
  plugins: [
    new CleanWebpackPlugin([assetsPath], { root: projectRootPath }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'fe-base',
      filename: 'index.html',
      template: './src/template.html',
      chunks: ['index'],
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  output: {
    path: assetsPath,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        options: {
          compact: false,
          cacheDirectory: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'url-loader',
        ],
      },
    ],
  },
};
