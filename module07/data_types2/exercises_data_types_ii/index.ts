const fs = require('fs');

type Usuario = {
    nome: string;
    email: string;
    cpf: string;
    profissao?: string;
    endereco: Endereco | null;
};

type Endereco = {
    cep: string;
    rua: string;
    complemento?: string;
    bairro: string;
    cidade: string;
};

const lerArquivo = (): unknown => {
    return JSON.parse(fs.readFileSync('./bd.json'));
};

const escreverArquivo = (dados: any): void => {
    fs.writeFileSync('./bd.json', JSON.stringify(dados));
};

const cadastrarUsuario = (dados: Usuario): Usuario => {
    const bd = lerArquivo() as Usuario[];

    bd.push(dados);
    escreverArquivo(bd);

    return dados;
};

const listarUsuarios = (filtro?: string): Usuario[] => {
    const bd = lerArquivo() as Usuario[];

    const usuariosEncontrados = bd.filter(usuario => {
        if (filtro) {
            return usuario.profissao === filtro;
        }

        return usuario;
    });

    return usuariosEncontrados;
};

const detalharUsuario = (cpf: string): Usuario[] => {
    const bd = lerArquivo() as Usuario[];

    const usuarioEncontrado = bd.filter(usuario => {
        return usuario.cpf === cpf;
    });

    if (!usuarioEncontrado) {
        throw new Error('Usuário não encontrado');
    }

    return usuarioEncontrado;
};

const atualizarUsuario = (cpf: string, dados: Usuario): Usuario => {
    const bd = lerArquivo() as Usuario[];

    const usuarioEncontrado = bd.find(usuario => {
        return usuario.cpf === cpf;
    });

    if (!usuarioEncontrado) {
        throw new Error('Usuário não encontrado');
    }

    Object.assign(usuarioEncontrado, dados);

    escreverArquivo(bd);

    return dados;
};

const deletarUsuario = (cpf: string): Usuario => {
    const bd = lerArquivo() as Usuario[];

    const usuarioEncontrado = bd.find(usuario => {
        return usuario.cpf === cpf;
    });

    if (!usuarioEncontrado) {
        throw new Error('Usuário não encontrado');
    }

    const exclusao = bd.filter(usuario => {
        return usuario.cpf !== cpf;
    });

    escreverArquivo(exclusao);

    return usuarioEncontrado;
};

// cadastrarUsuario({
//     nome: 'Joana',
//     email: 'joana@email.com',
//     cpf: '123456789-89',
//     profissao: 'Desenvolvedora Frontend',
//     endereco: { cep: '81710-000', rua: 'Rua das Flores', bairro: 'Centro', cidade: 'Curitiba' },
// });

// detalharUsuario('123456789-89');

// atualizarUsuario('123456789-89', {
//     nome: 'Joana da Silva',
//     email: 'joana_silva@email.com',
//     cpf: '123456789-89',
//     endereco: { cep: '81710-000', rua: 'Rua das Flores', bairro: 'Centro', cidade: 'Curitiba' },
// });

// deletarUsuario('123456789-89');

// console.log(listarUsuarios('Desenvolvedora Frontend'));

const bd = lerArquivo();

console.log(bd);
