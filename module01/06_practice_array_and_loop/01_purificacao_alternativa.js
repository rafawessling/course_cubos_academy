let caracteresEspeciais = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '.'];

let stringCorrompida = '*Canis %lupus )familiaris';
let stringPurificada = '';

/*for (let caractere of stringCorrompida) {
    let especial = caracteresEspeciais.includes(caractere);
    if (!especial) {
        stringPurificada += caractere;
    }
}*/

for (let index = 0; index < stringCorrompida.length; index++) {
    if (!caracteresEspeciais.includes(stringCorrompida[index])) {
        stringPurificada += stringCorrompida[index];
    }
}
console.log(stringPurificada);
