const resultados = ['V', 'E', 'D', 'V', 'E'];

let placar = 0;

for (let item of resultados) {
    if (item === 'V') {
        placar += +3;
    } else if (item === 'E') {
        placar += 1;
    }
}

console.log(placar);
