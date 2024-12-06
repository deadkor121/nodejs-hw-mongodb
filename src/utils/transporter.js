import nodemailer from 'nodemailer';
import { env } from './env.js';
import { ENV_VAR } from '../constants/index.js';

const transporter = nodemailer.createTransport({
  host: env(ENV_VAR.SMTP_HOST),
  port: Number(env(ENV_VAR.SMTP_PORT)),
  secure: false, // true for 465, false for other ports
  auth: {
    user: env(ENV_VAR.SMTP_USER),
    pass: env(ENV_VAR.SMTP_PASSWORD),
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP connection successful:', success);
  }
});

export const sendEmail = async (options) => {
  console.log('Sending email with options:', options);
  try {
    const info = await transporter.sendMail(options);
    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
