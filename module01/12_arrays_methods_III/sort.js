const numeros = [1, 30, 4, 6, 34, 4];

const ordemCrescente = numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    if (a === b) {
        return 0;
    }
});

console.log(ordemCrescente);

const ordemDecrescente = numeros.sort((a, b) => {
    if (a < b) {
        return 1;
    }
    if (a > b) {
        return -1;
    }
    if (a === b) {
        return 0;
    }
});

console.log(ordemDecrescente);
