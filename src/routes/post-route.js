import { getAllPostsController,createPostController,updatePostController,deletePostController,getOnePostsController } from '../controllers/post-controller.js';
import express from 'express';
const router = express.Router();

router.route('/').get(getAllPostsController)

router.route('/').post(createPostController)

router.route('/:id')
  .patch(updatePostController)
  .delete(deletePostController)
  .get(getOnePostsController)


export const postRouter = router;