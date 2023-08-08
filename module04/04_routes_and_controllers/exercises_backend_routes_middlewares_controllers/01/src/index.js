import express from 'express';
import { somarNumeros, subtrairNumeros, multiplicarNumeros, dividirNumeros } from './controllers/calc.js';
import { verificarNumeros, verificarDivisor } from './middleware.js';

const app = express();

app.use(verificarNumeros);

app.get('/somar', somarNumeros);
app.get('/subtrair', subtrairNumeros);
app.get('/multiplicar', multiplicarNumeros);
app.get('/dividir', verificarDivisor, dividirNumeros);

app.listen(3000);
