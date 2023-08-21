import products from '../data.js';
import { writeFile, readFile } from 'fs/promises';

const getProducts = async (req, res) => {
    return res.status(200).json(products);
};

const registerSale = async (req, res) => {
    const { id, quantity } = req.body;

    const product = products.find(product => {
        return product.id === Number(id);
    });

    if (!product) {
        return res.status(404).json({ message: 'Product not found.' });
    }

    try {
        const prevSales = await readFile('./src/sales.json');

        const parseSales = JSON.parse(prevSales);

        parseSales.sales.push({ product, quantity });

        const salesJson = JSON.stringify(parseSales);

        await writeFile('./src/sales.json', salesJson);

        return res.status(201).json({ message: 'success' });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

export { getProducts, registerSale };
