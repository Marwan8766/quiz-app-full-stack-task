import { v2 as cloudinary } from 'cloudinary';
import catchAsync from './catchAsync.mjs';
import AppError from './appError.mjs';

export const configureCloudinary = (req, res, next) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  next();
};

export const uploadFileToCloudinary = async (fileBuffer) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ resource_type: 'auto' }, (error, result) => {
        if (error) {
          console.error(error);
          reject(new AppError("This image couldn't be uploaded", 400));
        } else {
          resolve(result.secure_url);
        }
      })
      .end(fileBuffer);
  });
};
