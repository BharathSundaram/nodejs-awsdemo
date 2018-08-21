// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'Bharath', email: 'bharath.inmail@gmail.com', avatar: 'https://storage.googleapis.com/bharath874955/me.png'},
    { name: 'Chandramohan', email: 'chandrumeister@gmail.com', avatar: 'http://placekitten.com/400/400'},
    { name: 'Bhagavathiperumal', email: 'mrparry86@gmail.com', avatar: 'http://placekitten.com/500/500'},
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});