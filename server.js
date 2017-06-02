require('dotenv').load({silent: true});
const compression = require('compression');
const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const tilesPath = process.env.TILES_PATH;
const port = process.env.PORT || 3000;

app.use(compression());

// serve Angular app
app.use(serveStatic('client'));

// optionally serve cached tiles from filesystem
if (tilesPath) {
  app.use('/tiles', serveStatic(tilesPath));
}

app.set('views', './client/app/templates');
app.set('view engine', 'jade');

// render Angular templates
app.get('/templates/:template', (req, res) => {
  const template = req.params.template;
  res.render(template, {});
});

app.listen(port, () => {
  console.info('Listening on port %s', port);
});
