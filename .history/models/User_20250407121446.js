import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },
  
  name: {
    type: String,
    required: true
  },

  
  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },

  avatar: {
    type: String,
    default: '',
    required: true

  }
}, {
  timestamps: true
});

export default mongoose.model('User', userSchema);