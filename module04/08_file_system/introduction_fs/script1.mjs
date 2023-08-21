import { fs } from 'fs';

console.log('Antes');

//Leitura de arquivos síncrono
// const a = fs.readFileSync('a.txt').toString();

// console.log(a);

fs.readFile('a.txt', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data.toString());
    }
});

console.log('Depois');
