import '../../styles/custom-classes.css';
import './style.css';
import { useState, useEffect } from 'react';
import closeIcon from '../../assets/close-icon.svg';

const Modal = ({ showProduct, product, handleCloseProduct }) => {
    const { image, name, description, oldPrice, currentPrice } = product;
    const [topPosition, setTopPosition] = useState(0);

    useEffect(() => {
        if (showProduct) {
            setTopPosition(document.documentElement.scrollTop + 25);
        }
    }, [showProduct]);

    const handleInstallments = currentPrice => {
        return (currentPrice / 6).toFixed(2);
    };

    return (
        <>
            {showProduct && (
                <main className="container-modal">
                    <section className="modal" style={{ top: topPosition }}>
                        <section className="modal-body">
                            <img className="close" src={closeIcon} alt="" onClick={() => handleCloseProduct(false)} />
                            <img className="product-img" src={image} alt="" />
                            <span className="name-modal">{name}</span>
                            <p className="description-modal">{description}</p>
                            <section className="buy-section">
                                <button className="btn-buy">Comprar</button>
                                <section>
                                    <div className="container-price container-price-modal">
                                        <span className="old old-modal">R$ {oldPrice.toFixed(2)}</span>
                                        <span className="current current-modal">R$ {currentPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="container-installments container-installments-modal">
                                        <span className="installments">6x R$ {handleInstallments(currentPrice)}</span>
                                        <span className="interests">Sem juros</span>
                                    </div>
                                </section>
                            </section>
                        </section>
                    </section>
                </main>
            )}
        </>
    );
};

export default Modal;
