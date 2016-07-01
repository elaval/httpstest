
var spdy = require('spdy'),
    fs = require('fs');
 
var options = {
	key: fs.readFileSync('/root/certs/api.key.pem'),
    cert: fs.readFileSync('/root/certs/api.cert.crt'),
    ca: [fs.readFileSync('/root/certs/ca_gd1.crt'), fs.readFileSync('/root/certs/ca_gd2.crt'), fs.readFileSync('/root/certs/ca_gd3.crt')]
};
 
var server = spdy.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('hello world!');
});
 
server.listen(3001);
console.log("listening 8000");
