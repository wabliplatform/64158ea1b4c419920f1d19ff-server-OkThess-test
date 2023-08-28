
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
Underscoreid:String , 


fullName:String 



})

module.exports = {
  Contact : mongoose.model('contact', contactSchema),
}

