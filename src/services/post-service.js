import post from "../models/post-model.js";
import ApiError from "../utils/apiError.js";
import { isEmpty,isNotNil,pickBy } from 'ramda';

export const getAllPostsService = async (query) => {
  const { start,end,city,room_type,station } = query;
  const toFindQuery = { city,room_type,station }
  const params = pickBy((val) => isNotNil(val) && !isEmpty(val),toFindQuery);
  const posts = await post.find(params);
  if (start && end) {
    const filterPrice = posts.filter(item => item.price >= start && item.price <= end);
    return filterPrice;
  } else {
    return posts;
  };
};

export const getOnePostService = async (id) => {
  if (!id) {
    throw ApiError.notFound('not vaild')
  }
  const postOne = await post.findById(id)
  if (!postOne) {
    throw ApiError.notFound('has not this post')
  }
  return postOne
};

export const createPostService = async (body) => {
  try {
    const { title,image_url } = body;
    if (!title || !image_url) {
      return console.log('not value!');
    }

    const addPost = await post.create(body);

    return addPost;
  } catch (error) {
    console.log(error);
  }
};

export const updatePostService = async (id,data) => {
  if (!id) return;
  await post.findByIdAndUpdate(id,data);
  return
};

export const deletePostService = async (id) => {
  if (!id) return;
  await post.findByIdAndDelete(id);
  return
};