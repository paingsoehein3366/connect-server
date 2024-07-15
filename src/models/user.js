import { model,Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default model('users',userSchema);