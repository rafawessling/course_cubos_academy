const person = {
    name: 'José',
    age: '30',
    height: 1.73,
    driverLicense: true,
    surname: ['Jr', 'Juninho', 'J.'],
};

let textDriverLicense;

if (person.driverLicense) {
    textDriverLicense = 'has driver license';
} else {
    textDriverLicense = 'has no driver license';
}

console.log(`${person.name} is ${person.age} years old, ${person.height}m tall, he ${textDriverLicense} and
the following surnames:`);

for (let item of person.surname) {
    console.log(`- ${item}`);
}
