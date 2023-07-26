const nomeCompleto = 'Gabriel morais';
const nomeArray = nomeCompleto.split(' ');

const primeiroNome = nomeArray[0];
const sobrenome = nomeArray[1];

console.log(primeiroNome);
console.log(sobrenome);

// ---------------------------------- //

const tagsInput = 'JavaScript, HTML, CSS, Backend';
const tagsArray = tagsInput.split(',');

console.log(tagsArray);

// ---------------------------------- //

const dataString = '2023-06-15';
const dataParts = dataString.split('-');
console.log(dataParts);
