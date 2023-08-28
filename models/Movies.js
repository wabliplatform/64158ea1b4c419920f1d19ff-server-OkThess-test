
const { MoviesMovieImgSchema } =require('./MoviesMovieImg');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
Underscoreid:String , 


movieImg:  
MoviesMovieImgSchema
 



})

module.exports = {
  Movies : mongoose.model('movies', moviesSchema),
}

