import ApiError from "../utils/apiError.js";
import contactSchema from '../models/contact.js'

export const contactService = async (body) => {
  const { name,email,description } = body;
  if (!name && !email && !description) {
    throw ApiError.notFound('not vaild')
  }
  const contact = await contactSchema.create(body);
  return contact
};

export const getAllContactService = async (query) => {
  const contacts = await contactSchema.find();
  if (!contacts) {
    throw ApiError.notFound('No Data!')
  }
  return contacts;
};

export const getOneContactService = async (id) => {
  const contact = await contactSchema.findById(id).populate('posts')
  if (!contact) {
    throw ApiError.notFound('No Contact')
  }
  return contact;
};