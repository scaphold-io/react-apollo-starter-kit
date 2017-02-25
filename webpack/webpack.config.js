/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// console.log('dir');
// console.log(path.resolve(process.cwd(), 'app/assets/styles'));

module.exports = () => ({
  entry: path.join(process.cwd(), 'lib', 'js', 'app.js'),
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new CopyWebpackPlugin([
      // { from: 'src/images', to: 'assets/images' },
    ], {
      ignore: [],

      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      copyUnmodified: true,
    }),
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        // loader: 'babel-loader',
        test: /\.js$/,
      },
    ],
  },
  output: {
    path: path.join(process.cwd(), 'build'), // sets our output directory to build/
    filename: 'app.js', // sets our output filename to server.js
    publicPath: '/',
  },
});
