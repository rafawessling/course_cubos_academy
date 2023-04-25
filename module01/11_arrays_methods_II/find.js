const usuarios = [
    {
        nome: 'Joana',
        idade: 25,
    },
    {
        nome: 'João',
        idade: 20,
    },
    {
        nome: 'Ana',
        idade: 32,
    },
    {
        nome: 'Pedro',
        idade: 28,
    },
];

const resultado = usuarios.find(usuario => {
    return usuario.nome === 'Ana';
});

console.log(resultado);
