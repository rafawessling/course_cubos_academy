//Saber se um email é valido:
//Tem que ter pelo menos um @
// Tem que ter pelo menos um ponto depois do @

const verifyEmail = 'joana_silva@gmail.com';

if (
    verifyEmail.indexOf('@') > -1 &&
    verifyEmail.indexOf('.', verifyEmail.indexOf('@'))
) {
    console.log('Valid email');
} else {
    console.log('Invalid email');
}
