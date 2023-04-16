const precos = [20, 15, 8, 2, 12];

let diferenca = 0;
let diferencaMinima = Infinity;

for (let item = 0; item < precos.length; item++) {
    for (let i = item + 1; i < precos.length; i++) {
        diferenca = precos[item] - precos[i];
        if (precos[item] > precos[i] && diferenca < diferencaMinima) {
            diferencaMinima = diferenca;
        }
    }
}

console.log(diferencaMinima);
