var jsonServer = require('json-server');

// Returns an Express server
var server = jsonServer.create();

// Set default middlewares (logger, static, cors and no-cache)
server.use(jsonServer.defaults());

// Add custom routes
//server.get('/custom', function (req, res) { res.json({ msg: 'hello' }) })

//server.get('/test/{id}', function (req, res) { console.log(req); res.json({ msg: 'hello' }) })

// Returns an Express router

server.get('/custom/:id', function (req, res) { res.json([{id:1, msg: 'hello' }]) });

var router = jsonServer.router('db.json');

server.use(router);

server.listen(3000);
