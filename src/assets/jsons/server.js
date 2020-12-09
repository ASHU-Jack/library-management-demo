var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router(require('./db.js')())
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
    if (req.method === 'POST') {
        console.log('Time:', Date.now())
        next()
    }
    // Continue to JSON Server router
})

server.listen(3000, function() {
    console.log('JSON Server is running')
})