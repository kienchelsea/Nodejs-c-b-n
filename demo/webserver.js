var http = require("http")

http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/plain"});
    res.end("Chelsea is the best");
}).listen(8888);