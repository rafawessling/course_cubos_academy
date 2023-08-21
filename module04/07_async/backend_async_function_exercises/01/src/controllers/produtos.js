import produtos from '../bancodedados/produtos.js';
import { getStateFromZipcode } from 'utils-playground';

const getProdutos = async (req, res) => {
    return res.json(produtos);
};

const getProdutoById = async (req, res) => {
    const { idProduto } = req.params;

    const produtoEncontrado = produtos.find(produto => {
        return produto.id === Number(idProduto);
    });

    if (!produtoEncontrado) {
        return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    return res.json(produtoEncontrado);
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

    if (!produtoEncontrado) {
        return res.status(404).json({ message: 'Produto não encontrado.' });
    }

    estado = await getStateFromZipcode(cep);

    frete = produtoEncontrado.valor * 0.12;

    if (estados1.includes(estado)) {
        frete = produtoEncontrado.valor * 0.1;
    }

    if (estados2.includes(estado)) {
        frete = produtoEncontrado.valor * 0.15;
    }

    const result = {
        produto: produtoEncontrado,
        estado,
        frete,
    };

    res.json(result);
};

export { getProdutos, getProdutoById, getProdutoFrete };
