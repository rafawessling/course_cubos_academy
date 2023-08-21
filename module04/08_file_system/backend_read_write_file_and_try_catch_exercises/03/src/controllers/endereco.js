import { buscarEndereco } from 'utils-playground';
import { readFile, writeFile } from 'fs/promises';

const getEndereco = async (req, res) => {
    const { cep } = req.params;

    const formatarCep = [cep.slice(0, 5), '-', cep.slice(5)].join('');

    try {
        const listaEnderecos = await readFile('./src/enderecos.json');

        const parseEnderecos = JSON.parse(listaEnderecos);

        const enderecoEncontrado = parseEnderecos.find(endereco => {
            return endereco.cep === formatarCep;
        });

        if (enderecoEncontrado) {
            return res.status(200).json(enderecoEncontrado);
        }

        const endereco = await buscarEndereco(cep);

        if (endereco.erro) {
            return res.status(404).json({ menssagem: 'Endereco não encontrado' });
        }
        console.log(endereco);

        parseEnderecos.push(endereco);

        const stringifyEnderecos = JSON.stringify(parseEnderecos);

        await writeFile('./src/enderecos.json', stringifyEnderecos);

        return res.status(200).json(endereco);
    } catch (err) {
        return res.status(500).json(err.message);
    }
};

export { getEndereco };
