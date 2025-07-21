var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is example form Yuchen' });
});

router.get('/itinerary', function(req, res, next) {
  res.render('itinerary', { title: 'This is example form Yuchen' });
});

router.get('/flightstatus', function(req, res, next) {
  res.render('status', { title: 'This is example form Yuchen' });
});

router.get('/checkin', function(req, res, next) {
  res.render('checkin', { title: 'This is example form Yuchen' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'This is example form Yuchen' });
});

router.get('/seat', function(req, res, next) {
  res.render('seat', { title: 'This is example form Yuchen' });
});




module.exports = router;
