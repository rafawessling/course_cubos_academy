import React from 'react';
import './App.css';
import Header from './components/Header/index';
import ProductCard from './components/ProductCard';

const App = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Product 1 description',
            price: 100,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Product 2 description',
            price: 200,
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'Product 3 description',
            price: 300,
        },
        {
            id: 4,
            name: 'Product 4',
            description: 'Product 4 description',
            price: 400,
        },
        {
            id: 5,
            name: 'Product 5',
            description: 'Product 5 description',
            price: 500,
        },
    ];

    return (
        <div className="App">
            <Header />

            <div className="container">
                <h2>Products</h2>

                <div>
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
