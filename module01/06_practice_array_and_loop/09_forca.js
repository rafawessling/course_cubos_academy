const palavra = 'abelha';

const palpite = 'a';

let count = 0;

for (let letra of palavra) {
    if (letra === palpite) {
        count++;
    }
}

console.log(count);
