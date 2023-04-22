const letra = 'm';

const palavras = ['mamao', 'maca', 'melao', 'melancia', 'laranja'];

let contador = 0;

/*for (let resposta of palavras) {
    if (resposta[0] != letra) {
        contador++;
    }
}*/

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i][0] != letra) {
        contador++;
    }
}

console.log(contador);
