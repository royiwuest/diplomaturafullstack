var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('nosotros');
//     res.send('Hola soy la página nosotros');
});

module.exports = router;
