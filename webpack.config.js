const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './public/index.js',
    './public/style/main.less',
  ],
  output: {
    path: './public/dist',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-url!autoprefixer?browsers=last 2 version!less-loader'),
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      }
    ],
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: 'public/img/',
        to: 'img/'
      },
    ]),
    new ExtractTextPlugin('main.bundle.css', {
      allChunks: true,
    }),
  ],
};
