const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const cat = new Schema({
  name: String,
  age:   Number,
});

const Cat = mongoose.model('Cat', cat);

module.exports = Cat