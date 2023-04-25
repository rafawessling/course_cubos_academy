const nomes = ['Joana', 'João', 'Maria', 'Ana', 'José'];

function verificarNome(nome) {
    return nome === 'Ana';
}

const resultado = nomes.some(verificarNome);

console.log(resultado);

//const resultado = nomes.some((nome) => {
//    return nome === 'Ana';
//});

//___________________________________________________________

const numeros = [1, 2, 3, 4, 5];

const resultado2 = numeros.some(numero => {
    return numero % 2 === 0;
});

console.log(resultado2);
