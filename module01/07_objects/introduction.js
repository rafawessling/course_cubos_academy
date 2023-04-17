const person = {
    name: 'Maria',
    lastName: 'Silva',
    height: 1.73,
    weight: 60,
    age: 26,
};

person.name = 'Joana';

person['age'] = 28;

console.log(person);

console.log(`My name is ${person.name} and I'm ${person.age}.`);
