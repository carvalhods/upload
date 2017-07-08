module.exports = function(app) {
  var controller = app.controllers.upload;

  app.route("/")
    .get(function(req, res) {
      res.render("index");
    });

  app.route("/upload")
    .post(controller.uploadFile);
}
