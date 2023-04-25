const arquivos = [
    'arquivo1.exe',
    'arquivo2.jpg',
    'arquivo3.bat',
    'arquivo4.pdf',
];

function verificarArquivos(nomesArquivos) {
    const resultado = nomesArquivos.some(arquivo => {
        const existeVirus = arquivo.includes('.bat');

        return existeVirus;
    });

    if (resultado) {
        console.log('Vírus detectado.');
    } else {
        console.log('Nenhum vírus encontrado.');
    }
}

verificarArquivos(arquivos);
