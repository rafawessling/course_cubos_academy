import express from 'express';
import { getGuests, registerGuests, deleteGuest } from './controllers/guests.js';

const routes = express();

routes.get('/guests', getGuests);
routes.post('/guests', registerGuests);
routes.delete('/guests', deleteGuest);

export default routes;
