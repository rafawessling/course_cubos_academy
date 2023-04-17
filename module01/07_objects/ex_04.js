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

let total = 0;

for (let item of products) {
    total += item.unitPrice * item.quantity;
}

console.log(`Client: ${client.name},
Total: R$ ${(total / 100).toFixed(2)}`);
