import express from 'express';
import * as announcementController from '../controllers/announcementController.mjs';
import { configureCloudinary } from '../utils/cloudinary.mjs';
import { myMulter, fileValidation } from '../utils/multer.mjs';

const router = express.Router();

router
  .route('/')
  .post(
    myMulter(fileValidation.image),
    configureCloudinary,
    announcementController.uploadAnnouncementImage,
    announcementController.createAnnouncement
  )
  .get(announcementController.getAllAnnouncements);

router
  .route('/:id')
  .get(announcementController.getAnnouncement)
  .patch(
    myMulter(fileValidation.image),
    configureCloudinary,
    announcementController.updateAnnouncement,
    announcementController.updateAnnouncement
  )
  .delete(announcementController.deleteAnnouncement);

export default router;
