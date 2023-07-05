const users = {
    name: 'Rafaela',
    age: 27,
    stack: 'Fullstack',
    address: {
        city: 'Gothenburg',
        country: 'Sweden',
    },
};

const {
    name,
    age,
    stack,
    address: { city, country },
} = users;

console.log(name);
console.log(age);
console.log(stack);
console.log(city);
console.log(country);
