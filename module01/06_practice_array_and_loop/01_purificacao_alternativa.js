let caracteresEspeciais = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '.'];

let stringCorrompida = '*Canis %lupus )familiaris';
let stringPurificada = '';

for (let caractere of stringCorrompida) {
    let especial = caracteresEspeciais.includes(caractere);
    if (!especial) {
        stringPurificada += caractere;
    }
}
console.log(stringPurificada);
