import './style.css';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Product from '../../components/Product';
import Modal from '../../components/Modal';
import shoes from '../../data';

function Main() {
    const [currProduct, setCurrProduct] = useState('');
    const [showProduct, setShowProduct] = useState(false);

    const handleShowProduct = product => {
        setShowProduct(true);
        setCurrProduct(product);
    };

    const handleCloseProduct = () => {
        setShowProduct(false);
        setCurrProduct('');
    };

    return (
        <main className="container">
            <Header />
            <div className="container-products">
                {shoes.map(product => (
                    <Product key={product.id} product={product} handleShowProduct={handleShowProduct} />
                ))}
            </div>
            <Footer />
            <Modal showProduct={showProduct} product={currProduct} handleCloseProduct={handleCloseProduct} />
        </main>
    );
}

export default Main;
