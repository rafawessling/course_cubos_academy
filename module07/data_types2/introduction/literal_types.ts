type Transacao = {
    numero: number;
    validade: string;
    cvv: number;
    nome: string;
    tipo: 'crédito' | 'débito';
};

const transacao = (transacao: Transacao) => {
    return transacao;
};
