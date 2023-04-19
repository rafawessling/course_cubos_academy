//Transformar 'joana silva soares' em Joana Silva Soares

const name = 'joana silva soares';

const array = name.split(' ');

let updatedName = '';

for (let item of array) {
    let firstLetter = item[0].toUpperCase();
    let restName = item.slice(1);

    updatedName += firstLetter + restName + ' ';
}

console.log(updatedName.trim());
