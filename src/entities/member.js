const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const memberSchema = new Schema({
    id:String, 
    avatar:String, 
    gender:String,
    bio:String, 
    role:String, 
    name:String, 
    about:String, 
    username:String, 
    createdAt:  {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
  });
  
  const Member = mongoose.model('Member', memberSchema);
  
  
  module.exports = Member