const path = require('path');
const express = require('express');

const forceSsl = function (req, res, next) {
  if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
 };

const createServer = () => {
  const app = express();
  const indexPath = path.join(__dirname, 'build/index.html');
  const publicPath = express.static(path.join(__dirname, 'build/static'));

  app.use('/static', publicPath);
  app.get('/', function (_, res) { res.sendFile(indexPath) });
  app.use(forceSsl);

  return app;
}

module.exports = createServer;