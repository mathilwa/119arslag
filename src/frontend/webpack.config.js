const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app/app.jsx',
    './public/style/main.less',
  ],
  output: {
    path: '/public/dist',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
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
    { test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/, loader: 'null' },
    ],
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new ExtractTextPlugin('main.bundle.css', {
      allChunks: true,
    }),
  ],
};
