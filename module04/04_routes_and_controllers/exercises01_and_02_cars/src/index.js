import express from 'express';
import { getCars, findCar } from './controllers/cars.js';
import { validatePassword } from './middlewares.js';

const app = express();

app.use(validatePassword);

app.get('/cars', getCars);

app.get('/cars/:id', findCar);

app.listen(3000);
