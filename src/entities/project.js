import mongoose  from 'mongoose'
import { Schema } from 'mongoose';
const schema = new Schema({
    id: {
        type:String,
        required: true
    },
    status: String,
    accepted: {
        type:Boolean,
        required: true
    },
    published: Boolean,
    taskFinished: Number,
    openHiring: {
        type:Boolean,
        required: true
    },
    members: [String],
    needCV: {
        type:Boolean,
    },
    dueDate: Date,
    uid: String,
    leader: String,
    description: String,
    cover:String,
    taskTotal: Number,
    title: String,
    dueDate: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
  });
  
  const Project = mongoose.model('Project', schema);
  
  
  export default  Project