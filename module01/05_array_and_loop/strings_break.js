const word = 'Unsift';

let found = false;

for (let letter of word) {
    if (letter === 'h' || letter === 'H') {
        console.log('There is the letter "H".');
        found = true;
        break;
    }
}

if (!found) {
    console.log('There is no "H".');
}
