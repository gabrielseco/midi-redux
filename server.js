const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const opn = require('opn');
const PORT = 3000 || PROCESS.ENV.PORT;
const URL = `http://localhost:${PORT}`;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    hash: false,
    version: true,
    timings: true,
    assets: true,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: true,
    warnings: true,
    publicPath: false
  }
}).listen(PORT, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log(`Listening at ${URL}`);
  opn(URL);
});