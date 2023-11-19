import multer from 'multer';

export const fileValidation = {
  image: ['image/png', 'image/jpeg'],
};

export const myMulter = function () {
  const storage = multer.memoryStorage(); // Use memory storage for handling images without saving to disk

  function fileFilter(req, file, cb) {
    // Check if the file's mimetype is 'image/png' or 'image/jpeg'
    if (fileValidation.image.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb('Invalid format. Only PNG and JPEG images are allowed.', false);
    }
  }

  // Middleware function that handles single image upload
  const uploadMiddleware = multer({
    fileFilter,
    storage,
  }).single('image'); // For single image upload

  return uploadMiddleware;
};
