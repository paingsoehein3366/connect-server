import express from 'express';
import { createUserController,userLoginController } from '../controllers/user-controller.js';
const router = express.Router();

router.route('/').post(createUserController)
router.route('/login').post(userLoginController)

export const userRouter = router;