const data = {
    name: 'João',
    age: 12,
    height: 1.4,
    occupation: 'student',
};

function presentation(person) {
    if (person.age < 25) {
        console.log(
            `Hello! My name is ${person.name}, I'm a young of ${person.age} years old, ${person.height} m tall and I'm a(an) ${person.occupation}.`
        );
    } else if (person.age < 65) {
        console.log(
            `Hello! My name is ${person.name}, I'm an adult of ${person.age} years old, ${person.height} m tall and I'm a(an) ${person.occupation}.`
        );
    } else {
        console.log(
            `Hello! My name is ${person.name}, I'm an elderly of ${person.age} years old, ${person.height} m tall and I'm a(an) ${person.occupation}.`
        );
    }
}

presentation(data);
