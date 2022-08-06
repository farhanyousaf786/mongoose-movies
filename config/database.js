// point of this file is to 
// create a connection to the server

const mongoose = require('mongoose');




// this will create a buket in mongodb with the name
// of moivies
mongoose.connect('mongodb://localhost/movies');


mongoose.connection.on('connected', function () {

    console.log('mongodb connection established at 27017'); 

});