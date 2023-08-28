
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MoviesMovieImgSchema = new Schema({
data:String , 
name:String 
});

module.exports = { MoviesMovieImgSchema };

