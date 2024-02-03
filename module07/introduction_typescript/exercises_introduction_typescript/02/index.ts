const listaLivros: string[] = [
    'Guerra e Paz',
    'A Montanha Mágica',
    'Cem Anos de Solidão',
    'Dom Quixote',
    'A Divina Comédia',
];

const localizarLivro = (listaLivros: string[], livro: string): string => {
    for (let i: number = 0; i < listaLivros.length; i++) {
        if (listaLivros[i] === livro) {
            const posicaoLivro: number = i + 1;

            return `O livro está na posicão ${posicaoLivro}`;
        }
    }
    return 'Livro não encontrado';
};

console.log(localizarLivro(listaLivros, 'A Divina Comédia'));
