var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World from GET');
})

app.get('/time', function (req, res) {
   res.send(new Date());
})

app.get('/cities', function (req, res) {
	var cities = [{'name':'Hyderabad', 'state':'AP'},{'name':'Guntur', 'state':'AP'} ];
	// load it from mongo
   res.send(cities);
})

app.post('/city', function(req, res) {
	//parse body params
	//create city in mongodb
});
app.delete('/city/:id', function(req, res) {
	//parse body params
	//create city in mongodb
});
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})