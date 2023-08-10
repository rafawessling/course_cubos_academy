import express from 'express';
import { getBooks, getBookById, registerBook, updateBook, updateInfoBook, deleteBook } from './controllers/books.js';

const routes = express();

routes.get('/books', getBooks);
routes.get('/books/:id', getBookById);
routes.post('/books', registerBook);
routes.put('/books/:id', updateBook);
routes.patch('/books/:id', updateInfoBook);
routes.delete('/books/:id', deleteBook);

export default routes;
