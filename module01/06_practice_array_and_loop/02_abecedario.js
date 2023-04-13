const letra = 'm';

const palavras = ['mamao', 'maca', 'melao', 'melancia', 'laranja'];

let contador = 0;

for (let resposta of palavras) {
    if (resposta[0] != letra) {
        contador++;
    }
}

console.log(contador);
