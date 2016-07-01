
var spdy = require('spdy'),
    fs = require('fs');
 
var options = {
	key: fs.readFileSync('keys/my-server.key.pem'),
    cert: fs.readFileSync('keys/c3aac01b022c04ab.crt'),
    ca: [fs.readFileSync('keys/gd_1.crt'), fs.readFileSync('keys/gd_2.crt'), fs.readFileSync('keys/gd_3.crt')]
};
 
var server = spdy.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('hello world!');
});
 
server.listen(3001);
console.log("listening 8000");
