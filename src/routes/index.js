import { postRouter } from './post-route.js';
import express from 'express';
import { userRouter } from './user-route.js';
import { contactRouter } from './contact-route.js';
const router = express.Router();

router.use('/posts',postRouter)

router.use('/user',userRouter)

router.use('/contact',contactRouter)

export default router;