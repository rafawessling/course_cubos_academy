type Email = string;

type Endereco = {
    rua: string;
    cep: string;
    cidade: string;
};

type Usuario = {
    nome: string;
    idade: number;
    email: Email;
    cpf: string;
    endereco?: Endereco;
};

const cadastro = (info: Usuario) => {
    console.log(info);
};

cadastro({ nome: 'Joana', idade: 32, email: 'joana@email.com', cpf: '123456789-90' });
