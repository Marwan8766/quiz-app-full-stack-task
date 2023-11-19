import * as Factory from './handlerFactory.mjs';
import Announcement from '../models/announcementModel.mjs';
import { uploadFileToCloudinary } from '../utils/cloudinary.mjs';
import catchAsync from '../utils/catchAsync.mjs';
import AppError from '../utils/appError.mjs';

export const uploadAnnouncementImage = catchAsync(async (req, res, next) => {
  const image = req.file;

  if (image) {
    try {
      req.body.image = await uploadFileToCloudinary(image.buffer);
    } catch (error) {
      console.error('Error uploading image:', error);
      return next(new AppError('Error uploading image', 500));
    }
  }

  next();
});

export const createAnnouncement = Factory.createOne(Announcement);
export const getAllAnnouncements = Factory.getAll(Announcement);
export const getAnnouncement = Factory.getOne(Announcement);
export const updateAnnouncement = Factory.updateOne(Announcement);
export const deleteAnnouncement = Factory.deleteOne(Announcement);
