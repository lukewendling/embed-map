var compression = require('compression');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(compression());

app.use(serveStatic('client'));

app.listen(process.env.PORT || 3000);
