import produtos from '../bancodedados/produtos.js';
import { getStateFromZipcode } from 'utils-playground';

const getProdutos = async (req, res) => {
    return res.send(produtos);
};

const getProdutoById = async (req, res) => {
    const { idProduto } = req.params;

    const produtoEncontrado = produtos.find(produto => {
        return produto.id === Number(idProduto);
    });

    return res.send(produtoEncontrado);
};

const getProdutoFrete = async (req, res) => {
    const { idProduto, cep } = req.params;
    const estados1 = ['BA', 'SE', 'AL', 'PE', 'PB'];
    const estados2 = ['SP', 'RJ'];
    let frete = 0;
    let estado = '';

    const produtoEncontrado = produtos.find(produto => {
        return produto.id === Number(idProduto);
    });

    if (produtoEncontrado) {
        estado = await getStateFromZipcode(cep);

        frete = produtoEncontrado.valor * 0.12;

        if (estados1.includes(estado)) {
            frete = produtoEncontrado.valor * 0.1;
        }

        if (estados2.includes(estado)) {
            frete = produtoEncontrado.valor * 0.15;
        }
    }

    const result = {
        produto: produtoEncontrado,
        estado,
        frete,
    };

    res.send(result);
};

export { getProdutos, getProdutoById, getProdutoFrete };
