
var spdy = require('spdy'),
    fs = require('fs');
var mosca = require('mosca')

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
console.log("listening 3001");
activateMosca();





function activateMosca() {
  //var SECURE_KEY = __dirname + '/../../test/secure/tls-key.pem';
  //var SECURE_CERT = __dirname + '/../../test/secure/tls-cert.pem';
  var SECURE_KEY = '/root/certs/api.key.pem';
  var SECURE_CERT = '/root/certs/api.cert.crt';
  var SECURE_CA = ['/root/certs/ca_gd1.crt', '/root/certs/ca_gd2.crt', '/root/certs/ca_gd3.crt'];

  var settings = {
    port: 8443,
    logger: {
      name: "secureExample",
      level: 40,
    },
    secure : { 
      keyPath: SECURE_KEY,
      certPath: SECURE_CERT,
      caPaths : SECURE_CA
    }
  };
  var server = new mosca.Server(settings);
  server.on('ready', setup);

  // fired when the mqtt server is ready
  function setup() {
    console.log('Mosca server is up and running');
    console.log(SECURE_KEY);
  }
}


