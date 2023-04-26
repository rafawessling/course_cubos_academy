const numeros = [1, 30, 4, 6, 34, 4];

const ordemCrescente = numeros.sort((a, b) => {
    return a - b;
});

console.log(ordemCrescente);

const ordemDecrescente = numeros.sort((a, b) => {
    return b - a;
});

console.log(ordemDecrescente);
