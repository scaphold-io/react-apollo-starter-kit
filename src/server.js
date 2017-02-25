const fs = require('fs');
const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const WebpackDevServer = require('webpack-dev-server'); // eslint-disable-line
const config = require('./config');

const APP_PORT = 3001;

// Production version
let compiler = webpack({
  entry: path.join(process.cwd(), 'lib', 'js', 'app.js'),
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
    path: path.join(process.cwd(), 'lib'), // sets our output directory to lib/
    filename: 'app.js', // sets our output filename to server.js
    publicPath: '/js/',
  },
});

let app;
if (process.env.NODE_ENV !== 'production') {
  compiler = webpack({
    entry: path.join(process.cwd(), 'src', 'js', 'app.js'),
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          test: /\.js$/,
        },
      ],
    },
    output: {
      path: path.join(process.cwd(), 'src'), // sets our output directory to lib/
      filename: 'app.js', // sets our output filename to server.js
      publicPath: '/',
    },
  });

  app = new WebpackDevServer(compiler, {
    hot: true,
    contentBase: 'src/',
    publicPath: '/',
    proxy: { '/graphql': config.scapholdUrl },
    stats: {
      colors: true,
    },
  });
} else {
  app = new WebpackDevServer(compiler, {
    hot: false,
    contentBase: 'src/',
    publicPath: '/',
    proxy: { '/graphql': config.scapholdUrl },
    stats: {
      colors: false,
    },
  });
}

// Serve static resources
app.use('*', (req, res) => {
  fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);
});
