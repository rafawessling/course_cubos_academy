import express from 'express';
import {
    getTeachers,
    getTeacherById,
    registerTeacher,
    updateTeacher,
    updateStatus,
    deleteTeacher,
} from './controllers/teachers.js';
import { registerClass, getClasses, getClassById, getClassesTeacher } from './controllers/classes.js';

const routes = express();

routes.get('/teachers', getTeachers);
routes.get('/teachers/:id', getTeacherById);
routes.post('/teachers', registerTeacher);
routes.put('/teachers/:id', updateTeacher);
routes.patch('/teachers/:id/status', updateStatus);
routes.delete('/teachers/:id', deleteTeacher);

routes.get('/classes', getClasses);
routes.get('/classes/:id', getClassById);
routes.post('/teachers/:teacherId/classes', registerClass);
routes.get('/teachers/:teacherId/classes', getClassesTeacher);

export default routes;
