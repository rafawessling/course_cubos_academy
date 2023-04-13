const sequencia = '>>><>>>>>><<';

let indice = 0;

for (let item of sequencia) {
    if (item === '>') {
        indice++;
    } else if (item === '<') {
        indice--;
    }

    if (indice > 6) {
        indice = 0;
    } else if (indice < 0) {
        indice = 6;
    }
}

console.log(indice);
