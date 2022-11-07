const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    id: String,
    status: String,
    accepted: Boolean,
    published: Boolean,
    taskFinished: Number,
    openHiring: Boolean,
    members: [String],
    needCV: Boolean,
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
    }
  });
  
  const Project = mongoose.model('Project', schema);
  
  
  module.exports = Project