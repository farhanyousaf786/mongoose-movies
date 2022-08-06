module.exports = {


    new: newMovie,

}

function newMovie(req, res, next) {



    res.render('movies/new.ejs')


}