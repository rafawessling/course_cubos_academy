const json = JSON.stringify(['Joana', 'Ana', 'João', 'Pedro']);

function converterJSON(info: string): unknown {
    return JSON.parse(info);
}

const jsonConvertido = converterJSON(json) as string[];

console.log(jsonConvertido[0]);
