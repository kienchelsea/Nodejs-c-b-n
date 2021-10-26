var http = require("http")
var fs = require("fs") 

http.createServer(function(req, res){
    res.writeHead(200, {"Content-type": "text/html"});
    var data = fs.readFileSync(__dirname + "/index.html", "utf-8");
    data = data.replace("NAME", "LOVE YOU")
    res.end(data);
}).listen(7777)