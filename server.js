var compression = require('compression');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(compression());

app.use(serveStatic('client'));
app.use(serveStatic('test'));

app.set('views', './client/app/templates')
app.set('view engine', 'jade');

app.get('/templates/:template', (req, res) => {
  var template = req.params.template;
  res.render(template, {});
});

app.listen(process.env.PORT || 3000);
