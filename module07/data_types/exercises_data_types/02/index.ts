const listaUsuarios: { nome: string; idade: number; status: boolean }[] = [
    {
        nome: 'Guido',
        idade: 32,
        status: true,
    },
    {
        nome: 'Dani',
        idade: 30,
        status: true,
    },
    {
        nome: 'João',
        idade: 40,
        status: false,
    },
    {
        nome: 'Guilherme',
        idade: 29,
        status: true,
    },
    {
        nome: 'Ana',
        idade: 18,
        status: false,
    },
    {
        nome: 'José',
        idade: 28,
        status: false,
    },
];

const encontrarUsuario = (
    listaUsuarios: { nome: string; idade: number; status: boolean }[],
    nomePesquisado: string
): { nome: string; idade: number; status: boolean }[] => {
    const usuariosEncontrados = listaUsuarios.filter(usuario => {
        return usuario.nome.toLowerCase().includes(nomePesquisado.toLowerCase());
    });
    return usuariosEncontrados;
};

console.log(encontrarUsuario(listaUsuarios, 'jo'));
