function ageGroup(age) {
    if (age <= 21) {
        return 'Young';
    } else if (age < 66) {
        return 'Adult';
    } else {
        return 'Elderly';
    }
}

console.log(ageGroup(39));
console.log(ageGroup(20));
console.log(ageGroup(72));
