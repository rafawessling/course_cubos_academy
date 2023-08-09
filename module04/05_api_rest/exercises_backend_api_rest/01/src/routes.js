import express from 'express';
import { getStudents, getStudentById, registerStudent, deleteStudent, updateCourse } from './controllers/students.js';

const routes = express();

routes.get('/students', getStudents);
routes.get('/students/:id', getStudentById);
routes.post('/students/', registerStudent);
routes.delete('/students/:id', deleteStudent);
routes.patch('/students/:id', updateCourse);

export default routes;
