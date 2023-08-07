import express from 'express';
import { filterTeacher, findTeacher } from './controllers/teachers.js';

const app = express();

// Para informar que será passado um middleware
// Next é usado para dar sequência para os controladores
const firstMiddleware = (req, res, next) => {
    console.log('First middleware');
    next();
};

const secondMiddleware = (req, res, next) => {
    console.log('Second middleware');
    next();
};

// Esse intermediário foi usado em uma rota específica
const routeMiddleware = (req, res, next) => {
    console.log('Route middleware');
    next();
};

// Passando os middleware de forma independente
app.use(firstMiddleware);
app.use(secondMiddleware);

app.get('/teachers', routeMiddleware, filterTeacher);

app.get('/teachers/:id', findTeacher);

app.listen(3000);
