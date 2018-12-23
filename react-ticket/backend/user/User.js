const mongoose = require('mongoose');  
const UserSchema = new mongoose.Schema({  
  UserId: {
      type: String,
      required: true,
  },
  password: String,
  email: String,
  participant: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;