import { Router } from 'express';
import routerAuth from './auth.js';
import routerContacts from './contacts.js';

const rootRouter = Router();
rootRouter.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});


rootRouter.use('/auth', routerAuth);
rootRouter.use('/contacts', routerContacts);

export default rootRouter;
