var express = require('express');
var parser = require('ua-parser-js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  var language = req.acceptsLanguages()[0];
  var ua = parser(req.headers['user-agent']);
  var user = ua.os.name + ' ' + ua.os.version;
  res.send({ipaddress: ip, language: language, software: user});
});

module.exports = router;
