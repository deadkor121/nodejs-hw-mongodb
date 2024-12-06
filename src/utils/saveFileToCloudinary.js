// src/utils/saveFileToCloudinary.js
import cloudinary from 'cloudinary';
import { ENV_VAR } from '../constants/index.js';

cloudinary.v2.config({
  cloud_name: process.env[ENV_VAR.CLOUD_NAME],
  api_key: process.env[ENV_VAR.CLOUD_API_KEY],
  api_secret: process.env[ENV_VAR.CLOUD_API_SECRET],
});

export const saveFileToCloudinary = async (file) => {
  const result = await cloudinary.v2.uploader.upload(file.path);
  return result.secure_url;
};
