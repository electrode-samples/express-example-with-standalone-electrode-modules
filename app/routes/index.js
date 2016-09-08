var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET CSRF demo page. */
router.get('/csrf', function(req, res, next) {
  res.render('csrf', { title: 'CSRF Protection Demo' });
});

/* GET demo endpoint which will return a CSRF cookie + header */
router.get('/1', function(req, res, next) {
  res.end("valid");
});

/* POST demo endpoint which will require a CSRF cookie + header */
router.post('/2', function(req, res, next) {
  return res.end("valid");
});


module.exports = router;
