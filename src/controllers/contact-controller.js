import { contactService,getOneContactService,getAllContactService } from "../services/contact.-service.js";
import catchAsync from "../utils/catchAsync.js";

export const contactController = catchAsync(async (req,res) => {
  const contactData = await contactService(req.body);
  res.status(200).json({
    message: 'success',
    data: contactData
  })
});

export const getAllContactController = catchAsync(async (req,res) => {
  const contactData = await getAllContactService(req.params.id)
  res.status(200).json({
    message: 'success',
    data: contactData
  })
});

export const getOneContactController = catchAsync(async (req,res) => {
  const contactData = await getOneContactService(req.params.id)
  res.status(200).json({
    message: 'success',
    data: contactData
  })
});
