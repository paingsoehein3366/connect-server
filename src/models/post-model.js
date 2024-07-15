import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image_url: [
    {
      type: String,
      required: true
    }
  ],
  price: {
    type: Number,
    required: true
  },
  station: {
    type: String,
    required: true
  },
  room_type: {
    type: String,
    requierd: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  build_type: {
    type: String,
    required: true
  }
},
  { timestamps: true }
);

export default mongoose.model('Post',postSchema);