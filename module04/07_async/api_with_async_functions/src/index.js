import express from 'express';
import { getCityFromZipcode, getPackageDescriptionNpm } from 'utils-playground';

const app = express();

app.get('/', async (req, res) => {
    const cidade = await getCityFromZipcode('41256250');
    const cidade2 = await getCityFromZipcode('85630000');

    const promise = await Promise.all([cidade, cidade2]);

    const [resposta1, resposta2] = promise;

    return res.send(`Cidades: ${resposta1} e ${resposta2}`);
});

app.get('/pacote/:nomePacote', async (req, res) => {
    const { nomePacote } = req.params;

    const descricaoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(descricaoPacote);
});

app.listen(3000);
