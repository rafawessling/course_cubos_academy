const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

let menorNota = notas[0];
let maiorNota = notas[0];

let soma = 0;
let media = 0;

for (let item of notas) {
    soma += item;

    if (item < menorNota) {
        menorNota = item;
    }
    if (item > maiorNota) {
        maiorNota = item;
    }
}

media = (soma - menorNota - maiorNota) / (notas.length - 2);

console.log(media);
