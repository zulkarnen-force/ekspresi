import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const cat = new Schema({
  name: String,
  age:   Number,
});

const Cat = mongoose.model('Cat', cat);

export default  Cat