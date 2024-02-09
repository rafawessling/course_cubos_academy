// Pick<Type, Keys>
// Omit<Type, Keys>

type Pessoa = {
    nome: string;
    idade: number;
    email: string;
};

type NovoUsuario = Pick<Pessoa, 'nome' | 'idade'>;

type NovoUsuario2 = Omit<Pessoa, 'idade' | 'email'>;

const joana2: NovoUsuario = {
    nome: 'Joana',
    idade: 30,
};

const joana3: NovoUsuario2 = {
    nome: 'Joana',
};
