import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);