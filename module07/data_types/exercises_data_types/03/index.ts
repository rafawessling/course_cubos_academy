const mostrarTabuada = (numeros: number[]): string => {
    const resultados: string[] = [];

    for (let item of numeros) {
        for (let i = 0; i <= 10; i++) {
            let resultado = item * i;
            resultados.push(`${item} x ${i} = ${resultado}`);
        }
        resultados.push('---------------\n');
    }
    return resultados.join('\n');
};

console.log(mostrarTabuada([1, 5, 2]));
