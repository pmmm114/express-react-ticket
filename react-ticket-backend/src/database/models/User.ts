import mongoose from "mongoose";

export type UserModel = mongoose.Document & {
  email: string,
  password: string,

  profile: {
    name: string,
    gender: string,
    picture: string
  },
  admin: {
    type:Boolean,
    default: false
  }
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  profile: {
    name: String,
    gender: String,
    picture: String
  },
  admin: {
      type:Boolean,
      default: false
  }
}, { timestamps: true });
  
const User = mongoose.model("User", userSchema);
  
export default User;