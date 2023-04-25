//const imprimirNome = nome => {
//    console.log(nome);
//};

//imprimirNome('Rafaela');

const imprimirRafaela = () => {
    console.log('Rafaela Wessling');
};

setTimeout(imprimirRafaela, 2000);

setTimeout(() => {
    console.log('Cubos Academy');
}, 5000);

setTimeout(function () {
    console.log('Teste');
}, 5000);
