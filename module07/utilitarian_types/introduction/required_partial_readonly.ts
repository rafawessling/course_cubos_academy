type Usuario = {
    nome: string;
    idade?: number;
    email: string;
};

// const cadastrarUsuario = (usuario: Required<Usuario>) => {
//     return usuario
// }

// const cadastrarUsuario = (usuario: Partial<Usuario>) => {
//     return usuario;
// };

// cadastrarUsuario({
//     nome: 'Joana',
//     email: 'joana@email.com',
// });

const joana: Readonly<Usuario> = {
    nome: 'Joana',
    email: 'joana@email.com',
};
