const Movie = require('../models/movie');


module.exports = {
    new: newMovie,
    create,
    index,
}


function index(req, res) {


    res.send("This is index")

    //List out the movies

    Movie.find({}, function (err, allOfTheMovieInTheDatabase) {


        console.log(allOfTheMovieInTheDatabase, "<-- This is allOfTheMovieInTheDatabse")
        if (err) {
            res.send("You have error BRO, ")
        }
    })
    res.render('movies/index.ejs', {
        movies: allOfTheMovieInTheDatabase,
    });
}



function newMovie(req, res,) {
    res.render('movies/new.ejs')
}

function create(req, res,) {
    console.log("Content: ", req.body);
    req.body.nowShowing == !!req.body.nowShowing; // forces value to change to boolean

    // remove whitespace next to commas
    req.body.cast = req.body.cast.replace(/\s*,\s*/g, ',');
    // split if it's not an empty string
    if (req.body.cast) req.body.cast = req.body.cast.split(',');



    Movie.create(req.body,
        function (err, movieDocumentCreatedInTheDatabase) {
            if (err) {
                console.log(err, "< -- Error in movie create controller");
                return res.render('movies/new.ejs')
            }
            console.log(movieDocumentCreatedInTheDatabase, "< -- Created in the databse");
            // the response is always inside of the callbackof the movie model crud operation
            res.send("Response from the create function for movies");
        })
}