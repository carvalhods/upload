module.exports = function(app) {
  var controller = {

    uploadFile: function(req, res) {
      console.log(req.headers);
      if (!req.files.sampleFile) {
        return res.status(400).send('No files were uploaded');
      }

      if (req.files.sampleFile.data.length > (50*1024)) {
        return res.status(400).json('Tamanho máx. permitido: 50KB');
      }

      let sampleFile = req.files.sampleFile;

      sampleFile.mv('public/' + req.files.sampleFile.name, function(err){
        if (err)
          return res.status(500).send(err);

        res.send('File uploaded! (nome: ' + req.body.nome + ')');
        console.log('MIME: ' + req.files.sampleFile.mimetype);

      });
    }

  };

  return controller;
}
