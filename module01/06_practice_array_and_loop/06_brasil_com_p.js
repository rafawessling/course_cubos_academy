const palavras = ['bala', 'balanca', 'bacia', 'bola', 'bingo', 'banda'];

const primeiraLetra = 'c';

const segundaLetra = 'a';

let encontrado = 0;

for (let item of palavras) {
    if (item[0] === primeiraLetra && item[1] === segundaLetra) {
        encontrado = 1;
        console.log(item);
    }
}

if (encontrado === 0) {
    console.log('NENHUMA');
}
