const array: number[] = [0, 122, 4, 6, 7, 8, 44];

const verificaArray = (array: number[]): string => {
    const resultado: boolean = array.every(numero => {
        return numero % 2 === 0;
    });

    if (resultado) {
        return 'Array válido';
    }

    return 'Array inválido';
};

console.log(verificaArray(array));
