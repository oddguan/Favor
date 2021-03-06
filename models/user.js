const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  items: {
    borrow: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],
    lend: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
      },
    ],
  },
  posts: [
    {
      postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
      },
    },
  ],
  address: {
    street1: {
      type: String,
    },
    street2: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
  resetToken: String,
  resetTokenExpiration: Date,
  friends: [
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  icon: String,
  blockId: {
    type: Schema.Types.ObjectId,
    ref: 'Block',
  },
});

module.exports = mongoose.model('User', userSchema);
