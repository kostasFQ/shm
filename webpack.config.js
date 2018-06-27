const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './public/main.jsx',

  output: {
    filename: './public/bundle.js',
  },

  devServer: {
    contentBase: './public',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: ['babel-loader'],
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
      }],
  },
  plugins: [
    new ExtractTextPlugin('./public/bundle.css'),
  ],
};

