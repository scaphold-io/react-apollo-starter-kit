'use strict';

var fs = require('fs');
var path = require('path');
var webpack = require('webpack'); // eslint-disable-line
var WebpackDevServer = require('webpack-dev-server'); // eslint-disable-line
var config = require('./config');

var APP_PORT = 3001;

// Production version
var compiler = webpack({
  entry: path.join(process.cwd(), 'lib', 'js', 'app.js'),
  module: {
    loaders: [{
      exclude: /node_modules/,
      // loader: 'babel-loader',
      test: /\.js$/
    }]
  },
  output: {
    path: path.join(process.cwd(), 'lib'), // sets our output directory to lib/
    filename: 'app.js', // sets our output filename to server.js
    publicPath: '/js/'
  }
});

var app = void 0;
if (process.env.NODE_ENV !== 'production') {
  compiler = webpack({
    entry: path.join(process.cwd(), 'src', 'js', 'app.js'),
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$/
      }]
    },
    output: {
      path: path.join(process.cwd(), 'src'), // sets our output directory to lib/
      filename: 'app.js', // sets our output filename to server.js
      publicPath: '/'
    }
  });

  app = new WebpackDevServer(compiler, {
    hot: true,
    contentBase: 'src/',
    publicPath: '/',
    proxy: { '/graphql': config.scapholdUrl },
    stats: {
      colors: true
    }
  });
} else {
  app = new WebpackDevServer(compiler, {
    hot: false,
    contentBase: 'src/',
    publicPath: '/',
    proxy: { '/graphql': config.scapholdUrl },
    stats: {
      colors: false
    }
  });
}

// Serve static resources
app.use('*', function (req, res) {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), function (err, file) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

app.listen(APP_PORT, function () {
  console.log('App is now running on http://localhost:' + APP_PORT);
});