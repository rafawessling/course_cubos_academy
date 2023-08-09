import express from 'express';
import routes from './routes.js';
import { validatePassword } from './middleware.js';

const app = express();

app.use(validatePassword);

app.use(express.json());

app.use(routes);

app.listen(3000);
