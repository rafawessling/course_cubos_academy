const infoProduto: { produto: string; lote: number; ano: number; qtd: number } = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5,
};

const geradorEtiqueta = (infoProduto: { produto: string; lote: number; ano: number; qtd: number }): string[] => {
    const resultados: string[] = [];

    for (let i = 1; i <= infoProduto.qtd; i++) {
        const resultado: string = `${infoProduto.lote}-${infoProduto.ano}-${i.toString().padStart(3, '0')}`;
        resultados.push(resultado);
    }
    return resultados;
};

console.log(geradorEtiqueta(infoProduto));
