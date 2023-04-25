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

function verificarIdade(dados) {
    const resultado = dados.every(item => {
        return item.idade >= 18;
    });

    if (resultado) {
        console.log('Festa liberada!');
    } else {
        console.log('Possui menor de idade!');
    }
}

verificarIdade(usuarios);
