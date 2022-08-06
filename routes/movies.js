var express = require('express');
var router = express.Router();

const movieController = require('../controllers/movies');

/* GET users listing. */


router.get('/new', movieController.new)

module.exports = router;
