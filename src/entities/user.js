import mongoose  from 'mongoose'
import { Schema } from 'mongoose';
// mongoose.set('bufferCommands', false);
import bcryptPassword from "../utils/bycrpt.util.js"

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


userSchema.pre("save", function(next) {
  console.log(this.isModified("password"))
  if (this.password && this.isModified("password")) {
    try {
      this.password = bcryptPassword.hashPassword(this.password)
      console.log("save", this.password)
      return next();
    } catch (error) {
      return next(error);
    }
  }

});

const User = mongoose.model('User', userSchema);



export default User