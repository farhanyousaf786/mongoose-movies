var express = require('express');
var router = express.Router();

const movieController = require('../controllers/movies');

/* GET users listing. */




router.get ('/', movieController.index);
// -> /movies/new
router.get('/new', movieController.new);

// -> /movies
router.post('/', movieController.create);



module.exports = router;
