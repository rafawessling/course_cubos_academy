function determineAgeGroup(age) {
    if (age <= 21) {
        return 'a young';
    } else if (age < 66) {
        return 'an adult';
    } else {
        return 'an elderly';
    }
}

function presentation(person) {
    const ageGroup = determineAgeGroup(person.age);

    return `My name is ${person.name}, I'm ${ageGroup} of ${person.age} years old and I'm a(an) ${person.occupation}.`;
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
