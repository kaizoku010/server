import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  reviews: {
    type: Number,
    required: true
  },

  sku: {
    type: String,
    default: function() {
      const randomNum = Math.floor(100000 + Math.random() * 900000);
      return `SMZ-${randomNum}`;
    },
    unique: true
  },

 
  color: {
    type: String,
    required: false // Make color optional

  },

  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  },
}, {
  timestamps: true
});

export default mongoose.model('Product', productSchema);

