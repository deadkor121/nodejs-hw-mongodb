import express from 'express';
import { getContacts, getContactByIdHandler } from '../controllers/contacts.js';

const router = express.Router();

router.get('/', getContacts);
router.get('/:contactId', getContactByIdHandler);

export default router;
