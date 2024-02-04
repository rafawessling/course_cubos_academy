function imprimir(nome: string): string {
    return `Olá ${nome}`;
}

const imprimirMaiorIdade = (idade: number): boolean => {
    if (idade < 18) {
        return false;
    }

    return true;
};

const imprimirUsuario = (usuario: { nome: string; idade: number }): string => {
    return `Olá ${usuario.nome}`;
};

const imprimirArray = (array: string[]): string => {
    return array[0];
};
