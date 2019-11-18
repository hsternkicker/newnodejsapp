const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Tekton + Appsody!");
});
 
module.exports.app = app;
