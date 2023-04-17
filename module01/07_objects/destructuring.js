const person = {
    name: 'Joana da Silva',
    age: 30,
    city: 'Curitiba',
    occupation: 'Software developer',
};

//const name = person.name;
//const idade = person.age;

const { name, age, ...others } = person;

console.log(name, age);
console.log(others);
