import bcrypt from "bcrypt-nodejs";
import crypto from "crypto";
import mongoose from "mongoose";

export type UserModel = mongoose.Document & {
  email: string,
  password: string,

  tokens: AuthToken[],

  profile: {
    name: string,
    gender: string,
    picture: string
  },

  comparePassword: comparePasswordFunction
};

type comparePasswordFunction = (candidatePassword: string, cb: (err: any, isMatch: any) => {}) => void;

export type AuthToken = {
  accessToken: string,
  kind: string
};

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,

  tokens: Array,

  profile: {
    name: String,
    gender: String,
    picture: String
  }
}, { timestamps: true });
  
  const User = mongoose.model("User", userSchema);
  export default User;