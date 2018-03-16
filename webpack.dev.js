const merge = require('webpack-merge');
const notifier = require('node-notifier');
const common = require('./webpack.common.js');
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  plugins: [
    new FlowStatusWebpackPlugin({
      onSuccess: function (stdout) {
        console.log('flowtype:', stdout);
      },
      onError: function (stdout) {
        console.error('flowtype:', stdout);
        notifier.notify({
          title: 'Flow Error',
          message: stdout,
          icon: 'https://pbs.twimg.com/profile_images/889697663087542272/7mfszmjJ.jpg'
        });
      }
    }),
  ],
  output: {
    filename: '[name].js'
  },
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
  },
});
