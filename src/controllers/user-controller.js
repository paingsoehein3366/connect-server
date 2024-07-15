import { createUserService,loginUserService } from '../services/user-service.js';
import catchAsync from '../utils/catchAsync.js';

export const createUserController = catchAsync(async (req,res) => {
  const user = createUserService(req.body);
  res.status(200).json({
    message: "success",
    data: user
  })
});

export const userLoginController = catchAsync(async (req,res) => {
  const userToken = await loginUserService(req.body);
  res.status(200).json({
    message: "success",
    token: userToken
  })
});