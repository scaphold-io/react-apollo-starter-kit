'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_PORT = 3001;

var compiler = (0, _webpack2.default)({
  entry: _path2.default.resolve(__dirname, 'js', 'app.js'),
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      test: /\.js$/
    }]
  },
  output: { filename: 'app.js', path: '/' }
});

var contentBase = 'src/';
if (process.env.NODE_ENV === "production") {
  contentBase = 'lib/';
}

var app = new _webpackDevServer2.default(compiler, {
  contentBase: contentBase,
  publicPath: '/js/',
  proxy: { '/graphql': _config2.default.scapholdUrl },
  stats: { colors: true }
});
// Serve static resources
app.use('/', _express2.default.static(_path2.default.resolve(__dirname, '/')));
app.listen(APP_PORT, function () {
  console.log('App is now running on http://localhost:' + APP_PORT);
});