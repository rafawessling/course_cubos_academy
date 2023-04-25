const carros = [
    {
        nome: 'Golf',
        marca: 'Volksvagen',
        ano: 2020,
        cor: 'prata',
    },
    {
        nome: 'Fiesta',
        marca: 'Ford',
        ano: 2021,
        cor: 'branco',
    },
    {
        nome: 'Corolla',
        marca: 'Toyota',
        ano: 2023,
        cor: 'cinza',
    },
    {
        nome: 'Hilux',
        marca: 'Toyota',
        ano: 2021,
        cor: 'preto',
    },
];

function encontrarCarro(carros, marca) {
    const resultado = carros.find(carro => {
        return carro.marca === marca;
    });

    console.log(resultado);
}

encontrarCarro(carros, 'Toyota');
