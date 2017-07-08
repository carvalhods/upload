var express = require("express");
var load = require("express-load");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function() {
  var app = express();
  app.set("port", 3000);
  app.use(express.static(path.join(__dirname, "../public")));
  app.set("view engine", "ejs");
  app.set("views", "./app/views");

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require("method-override")());

  app.use(require("express-fileupload")());

  load('controllers', {cwd: 'app'})
  .then('routes')
  .into(app);

  return app;
}
