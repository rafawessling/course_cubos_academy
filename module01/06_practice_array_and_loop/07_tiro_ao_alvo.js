const disparos = [0, 50, 90, 80, 100, 80, 40];

let maior70 = 0;

for (let item of disparos) {
    if (item >= 70) {
        maior70++;
    }
}

if (maior70 >= 3) {
    console.log(maior70);
} else {
    console.log('ELIMINADO');
}
