//setInterval(() => {
//    console.log('Olá alunos e alunas!');
//}, 2000);

//const imprimir = () => {
//    console.log('Olá!');
//    clearInterval(interval);
//};

//const interval = setInterval(imprimir, 1000);

let numero = 10;

const contador = setInterval(function () {
    console.log(numero);
    numero--;
    if (numero === 0) {
        console.log('Booooooom!');
        clearInterval(contador);
    }
}, 1000);
