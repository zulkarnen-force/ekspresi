const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    id: String,
    intro: String,
    title: String,
    buttonAction:  String,
    image: String, 
    buttonText: String,
    createdAt:  {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
  });
  
  const Post = mongoose.model('Post', postSchema);
  
  
  module.exports = Post