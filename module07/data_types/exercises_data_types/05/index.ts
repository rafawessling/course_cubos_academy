const soletrarPalavra = (palavra: string): string => {
    return palavra.split('').join('-');
};

console.log(soletrarPalavra('programador'));
