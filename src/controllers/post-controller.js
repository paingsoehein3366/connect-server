import { createPostService,deletePostService,getAllPostsService,updatePostService,getOnePostService } from "../services/post-service.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllPostsController = catchAsync(async (req,res) => {
  const getAllPosts = await getAllPostsService(req.query);
  res.status(200).json({
    message: 'success',
    data: getAllPosts
  })
});

export const getOnePostsController = catchAsync(async (req,res) => {
  const getAllPosts = await getOnePostService(req.params.id);
  res.status(200).json({
    message: 'success',
    data: getAllPosts
  })
});

export const createPostController = catchAsync(async (req,res,) => {
  const addPost = await createPostService(req.body);
  res.status(200).json({
    message: 'success',
    data: addPost
  })
});

export const updatePostController = catchAsync(async (req,res) => {
  const updatePost = await updatePostService(req.params.id,req.body);
  res.status(200).json({
    message: 'success',
  })
});

export const deletePostController = catchAsync(async (req,res) => {
  const deleteData = await deletePostService(req.params.id);
  res.status(200).json({
    message: 'success',
  })
});