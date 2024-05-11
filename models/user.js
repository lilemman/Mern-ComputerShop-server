const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minLength: [6, 'Password must be up to 6 characters'],
  },
  role: {
    type: String,
    required: [true],
    default: 'customer',
    enum: ['customer', 'admin'],
  },
  picture: {
    type: String,
    required: [true, 'Please add a picture'],
    default: 'https://i.ibb.bo/4pDNDK1/avatar.png',
  },
  phone: {
    type: Number,
  },
  address: {
    type: Object,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
