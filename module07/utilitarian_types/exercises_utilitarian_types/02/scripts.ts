type Item = {
    nome: string;
    descricao: string;
    valor: number;
};

type Cartao = {
    numero: number;
    validade: string;
    nome: string;
    cvv: number;
};

type Carrinho = {
    item: Item;
    qtd: number;
    desconto: number;
    frete: number;
    tipoTransacao: 'credito' | 'Debito';
    cartao: Cartao;
};

type Endereco = {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
};

type NovoCarrinho = Omit<Carrinho, 'tipoTransacao'> & {
    endereco: Endereco;
    tipoTransacao: Lowercase<'credito' | 'Debito'>;
};

// const venda: NovoCarrinho = {
//     item: {
//         nome: 'Notebook',
//         descricao: 'Notebook Lenovo 15"',
//         valor: 1234,
//     },
//     qtd: 1,
//     desconto: 25,
//     frete: 25,
//     tipoTransacao: 'credito',
//     cartao: {
//         numero: 1234567890,
//         validade: '03/28',
//         nome: 'Joana da Silva',
//         cvv: 123,
//     },
//     endereco: {
//         cep: '81710-000',
//         rua: 'Rua 9',
//         bairro: 'Centro',
//         cidade: 'Curitiba',
//         estado: 'Paraná'
//     }
// };
