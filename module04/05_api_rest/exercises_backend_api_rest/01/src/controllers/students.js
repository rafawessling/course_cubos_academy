import { data } from '../data/data.js';
import courses from '../data/courses.js';

let { students, identifierStudent } = data;

const getStudents = (req, res) => {
    return res.status(200).json(students);
};

const getStudentById = (req, res) => {
    const { id } = req.params;

    const student = students.find(student => {
        return student.id === Number(id);
    });

    if (isNaN(Number(id))) {
        return res.status(404).json({ message: 'The id has to be a valid number.' });
    }

    if (!student) {
        return res.status(404).json({ message: 'Student not found.' });
    }

    res.status(200).json(student);
};

const registerStudent = (req, res) => {
    const { name, last_name, age, course } = req.body;

    if (!name || name.split(' ').join('') === '') {
        return res.status(400).json({ message: 'Name is required.' });
    }

    if (!last_name || last_name.split(' ').join('') === '') {
        return res.status(400).json({ message: 'Last name is required.' });
    }

    if (!age || String(age).split(' ').join('') === '') {
        return res.status(400).json({ message: 'Age is required.' });
    }
    if (age < 18) {
        return res.status(400).json({ message: 'The student must be over 18 years old. ' });
    }

    if (!course || course.split(' ').join('') === '') {
        return res.status(400).json({ message: 'Course is required.' });
    }

    const verifyCourse = courses.find(item => {
        return item.toLowerCase() === course.toLowerCase();
    });

    if (!verifyCourse) {
        return res.status(400).json({ message: 'The course entered is not available.' });
    }

    const newStudent = {
        id: identifierStudent++,
        name,
        last_name,
        age,
        course,
    };

    students.push(newStudent);

    return res.status(201).send();
};

const deleteStudent = (req, res) => {
    const { id } = req.params;

    const student = students.find(student => {
        return student.id === Number(id);
    });

    if (isNaN(Number(id))) {
        return res.status(404).json({ message: 'The id has to be a valid number.' });
    }

    if (!student) {
        return res.status(404).json({ message: 'Student not found.' });
    }

    students = students.filter(student => {
        return student.id !== Number(id);
    });

    return res.status(200).json(student);
};

const updateCourse = (req, res) => {
    const { id } = req.params;
    const { course } = req.body;

    const student = students.find(student => {
        return student.id === Number(id);
    });

    if (isNaN(Number(id))) {
        return res.status(404).json({ message: 'The id has to be a valid number.' });
    }

    if (!student) {
        return res.status(404).json({ message: 'Student not found.' });
    }

    if (!course || course.split(' ').join('') === '') {
        return res.status(400).json({ message: 'Course is required.' });
    }

    const verifyCourse = courses.find(item => {
        return item.toLowerCase() === course.toLowerCase();
    });

    if (!verifyCourse) {
        return res.status(400).json({ message: 'The course entered is not available.' });
    }

    student.course = course;

    return res.status(204).send();
};

export { getStudents, getStudentById, registerStudent, deleteStudent, updateCourse };
