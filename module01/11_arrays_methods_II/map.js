const usuarios = [
    { nome: 'Joana', sobrenome: 'Silva', idade: 26 },
    { nome: 'Pedro', sobrenome: 'Santos', idade: 30 },
    { nome: 'Maria', sobrenome: 'Soares', idade: 25 },
];

const novoArray = usuarios.map(usuario => {
    return {
        nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`,
        idade: usuario.idade,
    };
});

console.log(novoArray);
