let stringCorrompida = '*Canis %lupus )familiaris';
let stringPurificada = '';

for (let caractere of stringCorrompida) {
    if (
        caractere === '!' ||
        caractere === '@' ||
        caractere === '#' ||
        caractere === '$' ||
        caractere === '%' ||
        caractere === '&' ||
        caractere === '*' ||
        caractere === '(' ||
        caractere === ')' ||
        caractere === '.'
    ) {
    } else {
        stringPurificada += caractere;
    }
}
console.log(stringPurificada);
