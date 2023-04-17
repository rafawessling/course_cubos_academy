const car = {
    brand: 'Toyota',
    model: 'Etios',
    year: 2020,
};

const myCity = {
    city: 'Curitiba',
    state: 'Parana',
    country: 'Brazil',
};

const person = {
    name: 'José',
    city: myCity,
    height: 1.73,
    weight: 60,
    car,
};

console.log(person);
