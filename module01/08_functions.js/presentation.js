function presentation(person) {
    if (person.age < 25) {
        return `My name is ${person.name}, I'm a young of ${person.age} years old and I'm a(an) ${person.occupation}.`;
    } else if (person.age < 65) {
        return `My name is ${person.name}, I'm an adult of ${person.age} years old and I'm a(an) ${person.occupation}.`;
    } else {
        return `My name is ${person.name}, I'm an elderly of ${person.age} years old and I'm a(an) ${person.occupation}.`;
    }
}

const person1 = {
    name: 'José',
    age: 30,
    occupation: 'teacher',
};

const person2 = {
    name: 'Pedro',
    age: 68,
    occupation: 'doctor',
};

const person3 = {
    name: 'Ana',
    age: 19,
    occupation: 'student',
};

console.log(presentation(person1));
console.log(presentation(person2));
console.log(presentation(person3));
