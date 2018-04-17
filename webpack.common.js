const path = require('path');
const webpack = require('webpack');
const projectRootPath = path.resolve(__dirname, './');
const assetsPath = path.resolve(projectRootPath, './public');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: assetsPath,
    publicPath: '/',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          compact: false,
          cacheDirectory: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
      },
    ],
  },
};
