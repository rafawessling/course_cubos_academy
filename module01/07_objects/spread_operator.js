const person = {
    name: 'Joana da Silva',
    age: 30,
    occupation: 'Software developer',
    city: 'Curitiba',
};

const address = {
    street: 'Flower Street',
    number: '1234',
    district: 'Center',
};

const finalObject = {
    ...person,
    ...address,
    newProperty: 20,
};

console.log(finalObject);
