import mongoose  from 'mongoose'
import { Schema } from 'mongoose';
// {
//     "id": "15831239487393768",
//     "title": "Data Wilayah",
//     "uid": "ALDeZzRJF3Toeh3x4ee61vU7uRS2",
//     "taskFinished": 0,
//     "projectID": "15828710323631421",
//     "timestamp": {
//       "_seconds": 1583123949,
//       "_nanoseconds": 676000000
//     },
//     "asignTo": "Glf1Wm19Z7PVo9gQJ8QuWCJg2em2"
//   },

const cardSchema = new Schema({
  id:  {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required:true,
  },
  uid: String,
  taskFinished: Number,
  projectID: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  assignTo: String
});

const Card = mongoose.model('Card', cardSchema);


export default  Card   