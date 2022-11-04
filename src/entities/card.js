const mongoose = require( 'mongoose');
const { Schema } = mongoose;

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
    unique:true
  },
  uid: String,
  taskFinished: Number,
  projectID: String,
  createdAt: Date,
  updatedAt: {
    type: Date,
    default: Date.now()
  },
  assignTo: String
});

// cardSchema.path('email').index({ unique: true });

const Card = mongoose.model('Card', cardSchema);


module.exports = Card   