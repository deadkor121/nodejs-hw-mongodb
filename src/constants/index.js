// src/constants/index.js
import path from 'node:path';

export const ENV_VAR = {
  PORT: 'PORT',

  SMTP_HOST: 'SMTP_HOST',
  SMTP_PORT: 'SMTP_PORT',
  SMTP_USER: 'SMTP_USER',
  SMTP_PASSWORD: 'SMTP_PASSWORD',
  SMTP_FROM: 'SMTP_FROM',

  JWT_SECRET: 'JWT_SECRET',

  APP_DOMAIN: 'APP_DOMAIN',

  CLOUD_NAME: 'CLOUD_NAME',
  CLOUD_API_KEY: 'CLOUD_API_KEY',
  CLOUD_API_SECRET: 'CLOUD_API_SECRET',
};

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');

// Экспортируем необходимые переменные
export const CLOUD_NAME = process.env.CLOUD_NAME;
export const CLOUD_API_KEY = process.env.CLOUD_API_KEY;
export const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;
