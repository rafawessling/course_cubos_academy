const professores = [
    {
        nome: 'Guido',
        stack: 'backend',
    },
    {
        nome: 'Vidal',
        stack: 'backend',
    },
    {
        nome: 'Dani',
        stack: 'frontend',
    },
    {
        nome: 'Diego',
        stack: 'frontend',
    },
    {
        nome: 'Léo',
        stack: 'backend',
    },
    {
        nome: 'Ruli',
        stack: 'frontend',
    },
];

function professoresBackend(professores) {
    const resultado = professores.filter(professor => {
        return professor.stack === 'backend';
    });
    console.log(resultado);
}

function professoresFrontend(professores) {
    const resultado = professores.filter(professor => {
        return professor.stack === 'frontend';
    });
    console.log(resultado);
}

professoresBackend(professores);
professoresFrontend(professores);
