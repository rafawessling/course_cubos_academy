// Record<keys, type>

type Carro = {
    ano: number;
    cor: string;
};

type Propriedades = 'gol' | 'palio' | 'fusca';

const carros: Record<Propriedades, Carro> = {
    gol: {
        ano: 2021,
        cor: 'branco',
    },
    palio: {
        ano: 2014,
        cor: 'vermelho',
    },
    fusca: {
        ano: 1990,
        cor: 'azul',
    },
};
