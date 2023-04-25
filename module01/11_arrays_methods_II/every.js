const frutas = ['abacaxi', 'manga', 'melancia'];

const resultado = frutas.every(elementoAtual => {
    return elementoAtual != 'banana';
});

console.log(resultado);

//___________________________________________________________

const numeros = [1, 2, 3, 4, 5];

const resultado2 = numeros.every(numero => {
    return numero < 5;
});

console.log(resultado2);
