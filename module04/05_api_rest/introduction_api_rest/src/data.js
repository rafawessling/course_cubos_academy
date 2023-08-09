const data = {
    teacherIdentifier: 3,
    classIdentifier: 2,
    teachers: [
        {
            id: 1,
            name: 'Guido',
            email: 'guido@email.com',
            status: true,
        },
        {
            id: 2,
            name: 'Isa',
            email: 'isa@email.com',
            status: true,
        },
    ],
    classes: [
        {
            id: 1,
            teacher_id: 1,
            title: 'First server',
            description: 'Building the first server',
        },
    ],
};

export { data };
