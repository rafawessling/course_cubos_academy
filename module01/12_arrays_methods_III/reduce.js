const array = [0, 1, 2, 3, 4];

const somaTotal = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
}, 10);

console.log(somaTotal);
