const person1 = {
    name: 'José',
    age: 30,
    occupation: 'teacher',
    age_group: function () {
        if (this.age <= 21) {
            return 'a young';
        } else if (this.age < 66) {
            return 'an adult';
        } else {
            return 'an elderly';
        }
    },
    presentation: function () {
        const ageGroup = this.age_group(this.age);

        console.log(
            `My name is ${this.name}, I'm ${ageGroup} of ${this.age} years old and I'm a(an) ${this.occupation}.`
        );
    },
};

person1.presentation();

console.log(person1.age_group());
