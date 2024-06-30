
import cloudinary from 'cloudinary';
import { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } from '../constants/index.js';

cloudinary.v2.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
});

export const saveFileToCloudinary = async (file) => {
  const result = await cloudinary.v2.uploader.upload(file.path);
  return result.secure_url;
};
