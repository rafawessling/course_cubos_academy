const word = 'Rf';

let countA = 0;

for (let letter of word) {
    if (letter === 'a' || letter === 'A') {
        countA++;
    }
}

if (countA === 0) {
    console.log('There is no "A".');
} else {
    let unit = countA == 1 ? 'is' : 'are';
    console.log(`There ${unit} ${countA} "A"`);
}
