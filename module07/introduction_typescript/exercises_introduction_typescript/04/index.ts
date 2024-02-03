const cidades: string[] = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

const verificaCidades = (cidades: string[]): string[] => {
    const resultado = cidades.filter(cidade => {
        return cidade.length <= 8;
    });

    return resultado;
};

console.log(verificaCidades(cidades));
