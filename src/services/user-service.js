import dotenv from 'dotenv';
dotenv.config();
import userSchema from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import ApiError from '../utils/apiError.js';

export const createUserService = async (body) => {
  const { username,password } = body;
  if (!username && !password) {
    return console.log('no data');
  };
  const hash = await bcrypt.hash(password,10);
  const user = await userSchema.create({ username,password: hash });
  return user;
}

export const loginUserService = async (body) => {
  const { username,password } = body;
  if (!username && !password) {
    return console.log('no data');
  }
  const user = await userSchema.findOne({ username });
  if (user) {
    if (await bcrypt.compare(password,user.password)) {
      const payload = { username: user.username,_id: user._id,password: user.password }
      const token = jwt.sign(payload,process.env.SECRET);
      return token;
    }
  }
  return ApiError.notFound('incorrect username and password!')
}