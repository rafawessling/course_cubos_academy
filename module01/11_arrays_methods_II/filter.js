const numeros = [1, 2, 4, 4, 5, 1, 8, 6, 7];

const resultado = numeros.filter(numero => {
    return numero === 4;
});

console.log(resultado);

//___________________________________________________________

const nomes = ['Ana', 'Joana', 'Pedro', 'José'];

const resultado2 = nomes.filter(nome => {
    return nome === 'Joana';
});

console.log(resultado2);
