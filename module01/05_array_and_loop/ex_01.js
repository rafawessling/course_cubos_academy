const countries = ['Greece', 'Spain', 'Italy', 'Thailand', 'Norway'];

countries.push('Malta');
console.log(countries);

countries.pop();
console.log(countries);

countries.unshift('Canada');
console.log(countries);

countries.shift();
console.log(countries);

console.log(countries[countries.length - 1]);
console.log(countries[1]);
console.log(countries[2]);
