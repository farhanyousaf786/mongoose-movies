const MOVIE = require('../model/movie');


module.exports = {
    new: newMovie,
    create,

}

function newMovie(req, res,) {
    res.render('movies/new.ejs')
}


function create(req, res, ) {

    console.log("Content: ",  req.body);

    res.send("Response from create function for movie")


}