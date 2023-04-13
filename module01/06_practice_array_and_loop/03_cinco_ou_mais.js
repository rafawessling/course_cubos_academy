const valorProdutos = [150, 200, 300, 100, 400];

let menorValor = valorProdutos[0];
let soma = 0;

for (let valor of valorProdutos) {
    soma += valor;

    if (valor < menorValor) {
        menorValor = valor;
    }
}

if (valorProdutos.length >= 5) {
    soma -= menorValor;
}

console.log(soma);
