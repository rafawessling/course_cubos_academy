const products = [
    {
        name: 'Keyboard',
        unitPrice: 23000,
        quantity: 2,
    },
    {
        name: 'Headphone',
        unitPrice: 56000,
        quantity: 2,
    },
    {
        name: 'Monitor',
        unitPrice: 120000,
        quantity: 1,
    },
    {
        name: 'Mouse',
        unitPrice: 10000,
        quantity: 3,
    },
];

const client = {
    name: 'Joana da Silva',
    age: 30,
    products,
};

console.log(`Client: ${client.name},
Age: ${client.age}`);

client.age = 28;

console.log(`
Updating
Client: ${client.name},
Age: ${client.age}`);

console.log(`Name first product: ${products[0].name}`);
console.log(`Price last product: ${products[products.length - 1].unitPrice}`);
