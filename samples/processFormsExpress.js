var express = require('express');
var app = express();

app.use(express.static('partials'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/processForm', function (req, res) {
   // Prepare output in JSON format
   console.log(req.query.first_name +" is firstname and " + req.query.last_name +" is the last name");
   response = {
      method: 'get',
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/processForm', function (req, res) {
   // Prepare output in JSON format
   console.log(req.query.first_name +" is firstname and " + req.query.last_name +" is the last name");
   response = {
      method: 'post',
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})
