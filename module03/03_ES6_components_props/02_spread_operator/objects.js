const user = {
    name: 'Rafaela',
    age: 27,
    stack: 'Fullstack',
};

const userAddress = {
    city: 'Gothenburg',
    country: 'Sweden',
};

const userData = {
    ...user,
    name: 'Rafaela Wessling Oening',
    address: {
        ...userAddress,
        country: 'SE',
    },
};

console.log(userData);
