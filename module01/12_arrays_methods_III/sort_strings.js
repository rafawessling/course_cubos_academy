const pessoas = ['João', 'ana', 'carlos', 'Beatriz'];

pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas);

pessoas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(pessoas);
