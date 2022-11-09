import mongoose  from 'mongoose'
import { Schema } from 'mongoose';

const taskSchema = new Schema({
    id: {
        type:String,
        required: true,
      },
    checked: Boolean,
    projectID: {
        type:String,
        required: true,
    },
    cardID: {
        type:String,
        required: true,
    },
    createdAt:  {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
  });
  
  const Task = mongoose.model('Task', taskSchema);
  
  
  export default  Task