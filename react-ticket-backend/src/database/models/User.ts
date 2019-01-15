import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";

export interface UserModel extends mongoose.Document {
  email: string;
  password: string;
  profile: {
    name: string,
    gender: string,
    picture: string
  };
  admin: {
    type:Boolean,
    default: false
  };
  comparePassword: comparePasswordFunction;
};
type comparePasswordFunction = (password: string, cb: (err: any, result: any) => {}) => void;

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

userSchema.pre<UserModel>("save", function save(next) {
  const user = this;
  console.log("pre");
  if(!user.isModified("password")) { console.log("isModified"); return next();}
  bcrypt.genSalt(10, (err, salt) => {
    if(err) { return next(err); }
    bcrypt.hash(user.password, salt, (()=>{}), (err: mongoose.Error, hash:any) => {
      if(err) { return next(err); }
      user.password = hash;
      next();
    });
  });
});

const comparePassword:comparePasswordFunction = function(this:UserModel, password, cb): void {
  console.log("comparePassword");
  bcrypt.compare(password, this.password, (err: mongoose.Error, result: boolean) => {
    cb(err, result);
  });
};

userSchema.methods.comparePassword = comparePassword;

const User = mongoose.model("User", userSchema);
export default User;