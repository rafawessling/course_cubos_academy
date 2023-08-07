import teachers from '../database.js';

const filterTeacher = (req, res) => {
    const { stack } = req.query;
    let result = teachers;

    if (stack) {
        result = teachers.filter(teacher => {
            return teacher.stack === stack;
        });
    }
    res.send(result);
};

const findTeacher = (req, res) => {
    const teacherFound = teachers.find(teacher => {
        return teacher.id === Number(req.params.id);
    });
    res.send(teacherFound);
};

export { filterTeacher, findTeacher };
