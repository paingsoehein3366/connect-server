import express from "express";
import { contactController,getAllContactController,getOneContactController } from "../controllers/contact-controller.js";
const router = express.Router();

router.route('/').post(contactController).get(getAllContactController);

router.route('/:id').get(getOneContactController);

export const contactRouter = router;