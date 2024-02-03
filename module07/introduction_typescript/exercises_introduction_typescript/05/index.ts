const arrayNumeros: number[] = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filtraPares = (numeros: number[]): number[] => {
    const numerosPares: number[] = numeros.filter(numero => {
        return numero % 2 === 0;
    });

    return numerosPares;
};

console.log(filtraPares(arrayNumeros));
