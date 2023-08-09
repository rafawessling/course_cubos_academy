import { data } from '../data/data.js';

let { teachers, teacherIdentifier } = data;

const getTeachers = (req, res) => {
    return res.json(teachers);
};

const getTeacherById = (req, res) => {
    const { id } = req.params;

    const getTeacher = teachers.find(teacher => {
        return teacher.id === Number(id);
    });

    if (!getTeacher) {
        return res.status(404).json({ status: 'Teacher not found.' });
    }

    return res.json(getTeacher);
};

const registerTeacher = (req, res) => {
    const { name, email, status } = req.body;

    if (!name) {
        return res.status(400).json({ status: 'Name is required.' });
    }

    if (!email) {
        return res.status(400).json({ status: 'Email is required.' });
    }

    const teacher = {
        id: teacherIdentifier++,
        name,
        email,
        status: status ?? true,
    };

    teachers.push(teacher);

    return res.status(201).json(teacher);
};

const updateTeacher = (req, res) => {
    const { id } = req.params;
    const { name, email, status } = req.body;

    if (!name) {
        return res.status(400).json({ status: 'Name is required.' });
    }

    if (!email) {
        return res.status(400).json({ status: 'Email is required.' });
    }

    const teacher = teachers.find(teacher => {
        return teacher.id === Number(id);
    });

    if (!teacher) {
        return res.status(404).json({ status: 'Teacher not found.' });
    }

    teacher.name = name;
    teacher.email = email;
    teacher.status = status;

    return res.status(204).send();
};

const updateStatus = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const teacher = teachers.find(teacher => {
        return teacher.id === Number(id);
    });

    if (!teacher) {
        return res.status(404).json({ status: 'Teacher not found.' });
    }

    teacher.status = status;

    return res.status(204).send();
};

const deleteTeacher = (req, res) => {
    const { id } = req.params;

    const teacher = teachers.find(teacher => {
        return teacher.id === Number(id);
    });

    if (!teacher) {
        return res.status(404).json({ status: 'Teacher not found.' });
    }

    teachers = teachers.filter(teacher => {
        return teacher.id !== Number(id);
    });

    return res.status(204).send();
};

export { getTeachers, getTeacherById, registerTeacher, updateTeacher, updateStatus, deleteTeacher };
