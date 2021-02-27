var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/mailconfirm', function(req, res, next) {
  res.render('emailconfirm');
});

router.get('/mia', function(req, res, next) {
  res.redirect('https://play.google.com/store/apps/details?id=com.app.Handly')
});

router.get('/descarga', function(req, res, next) {
  res.redirect('https://play.google.com/store/apps/details?id=com.app.Handly')
});

router.get('/download', function(req, res, next) {
  res.redirect('https://play.google.com/store/apps/details?id=com.app.Handly')
});

/* router.get('/zohoverify/verifyforzoho.html', function(req, res, next) {
   res.sendFile('/verifyforzoho.html',{ root: 'public'}) 
  const file = `${'public'}/verifyforzoho.html`
  res.download(file);

}); */

module.exports = router;
