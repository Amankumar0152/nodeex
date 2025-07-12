var http = require('http')

http.createServer(function(req, res){
    
    res.writeHead(200, {'content-Type': 'text/html'})
    res.end("Welcome back Aliens from outer space!")
    
}).listen(8080)