const person = {
    name: 'José',
    age: '30',
    height: 1.73,
    driverLicense: false,
    surname: ['Jr', 'Juninho', 'J.'],
};

let textDriverLicense = true ? 'has driver license' : 'has no driver license';

console.log(`${person.name} is ${person.age} years old, ${person.height}m tall, ${textDriverLicense} and
the following surnames:`);

for (let item of person.surname) {
    console.log(`- ${item}`);
}
