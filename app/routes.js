// app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            console.log('finding nerds..');
            // use mongoose to get all nerds in the database
            loadNerds(res);
        });
        function loadNerds(res) {
            Nerd.find(function(err, nerds) {
            console.log('finding nerds here ' + nerds);
                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        } 
        app.post('/api/nerd', function(req, res) {
            var nerd = new Nerd(); 
            nerd.firstName = req.body.firstName;
            nerd.lastName = req.body.lastName;
            nerd.save(function(err) {
                if (err) {
                    res.send(err);
                }   
                loadNerds(res);
            });
        });
        app.put('/api/nerd/:id', function(req, res) {
            Nerd.findById(req.params.id, function(err, nerd) {
                if (err) {
                    res.send(err);
                }
                nerd.firstName = req.body.firstName;
                nerd.lastName = req.body.lastName;
                nerd.save(function(err) {
                    if (err)
                        res.send(err);

                    loadNerds(res);
                });
            });
            
        });
        app.get('/api/nerd/:id', function(req, res) {
            console.log('finding by id ' + req.params.id);
            Nerd.findById(req.params.id, function(err, nerd) {
                if (err) {
                   res.send(err); 
                }
                res.json(nerd);
            }); 
        });
        app.delete('/api/nerd/:id', function(req, res) {
            Nerd.remove({
                _id: req.params.id
            }, function(err, bear) {
                if (err)
                    res.send(err);
                loadNerds(res);
            });
        });


        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };
