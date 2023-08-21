import express, { json } from 'express';
import { writeFile, readFile } from 'fs/promises';

const app = express();

app.use(json());

app.get('/', async (req, res) => {
    const texto = 'Hello, world';

    await writeFile('./src/b.txt', texto);
    res.json('ok');
});

app.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    try {
        const teste = await readFile('./src/usuarios.json');

        const pessoas = JSON.parse(teste);

        pessoas.push({ nome, idade });

        const pessoasStringify = JSON.stringify(pessoas);

        await writeFile('./src/usuarios.json', pessoasStringify);

        return res.json('Pessoa cadastrada com sucesso.');
    } catch (erro) {
        return res.json(`Erro: ${erro.message}`);
    } finally {
        console.log('Essa mensagem sempre será exibida');
    }
});

app.listen(3000);
