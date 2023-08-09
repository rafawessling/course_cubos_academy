import { data } from '../data.js';

let { teachers, classes, classIdentifier } = data;

const getClasses = (req, res) => {
    return res.json(classes);
};

const getClassById = (req, res) => {
    const { id } = req.params;

    const foundClass = classes.find(item => {
        return item.id === Number(id);
    });

    if (!foundClass) {
        return res.status(404).json({ status: 'Class not found.' });
    }

    return res.json(foundClass);
};

const registerClass = (req, res) => {
    const { teacherId } = req.params;
    const { title, description } = req.body;

    const teacher = teachers.find(teacher => {
        return teacher.id === Number(teacherId);
    });

    if (!teacher) {
        return res.status(404).json({ status: 'Teacher not found.' });
    }

    const newClass = {
        id: classIdentifier++,
        teacher_id: Number(teacherId),
        title,
        description,
    };

    classes.push(newClass);

    res.status(201).json(newClass);
};

const getClassesTeacher = (req, res) => {
    const { teacherId } = req.params;

    const teacher = teachers.find(teacher => {
        return teacher.id === Number(teacherId);
    });

    if (!teacher) {
        return res.status(404).json({ status: 'Teacher not found.' });
    }

    const foundClasses = classes.filter(item => {
        return item.teacher_id === teacher.id;
    });

    return res.json(foundClasses);
};

export { getClasses, getClassById, registerClass, getClassesTeacher };
