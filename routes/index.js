var express = require('express');
var parser = require('ua-parser-js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = req.ips;
  var language = req.acceptsLanguages()[0];
  var ua = parser(req.headers['user-agent']);
  var user = ua.os.name + ' ' + ua.os.version;
  res.send({ipaddress: ip, language: language, software: user});
});

module.exports = router;
