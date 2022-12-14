import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const memberSchema = new Schema({
    id: {
        required: true,
        type:String
    }, 
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
  
  
export default  Member