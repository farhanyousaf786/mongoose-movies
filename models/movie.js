const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
 
    title: String,
    release: Number,
    mpaaRating: String,
    cast: [String],
    nowShowing: Boolean,

});



// Create our model, which will create the collection, 
// and return to us and object that can perform CRUD
// operations on that collection (typically you'll use the model in controller files)
module.exports = mongoose.model('Movie', movieSchema);