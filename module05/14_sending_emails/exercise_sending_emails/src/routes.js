import express from 'express';
import { registerUser } from './controllers/users.js';
import { sendEmail } from './controllers/emails.js';

const routes = express();

routes.post('/users', registerUser);

routes.post('/email', sendEmail);

export default routes;
