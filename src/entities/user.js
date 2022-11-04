const mongoose = require( 'mongoose');
const { Schema } = mongoose;
mongoose.set('bufferCommands', false);

const userSchema = new Schema({
  uid:{
    type:String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  displayName: String,
  password: {
    type: String,
  },
  phoneNumber:   String,
  emailVerfied: Boolean,
  disabled:   Boolean,
  photoURL:   String,
  lastSignInTime: Date,
  creationTime: Date,
  lastRefreshTime: Date,
});

const User = mongoose.model('User', userSchema);


module.exports = User