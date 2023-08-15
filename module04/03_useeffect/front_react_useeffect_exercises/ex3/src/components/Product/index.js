import '../../styles/products.css';
import './style.css';

const Product = ({ product, handleShowProduct }) => {
    const { image, name, oldPrice, currentPrice } = product;

    const handleInstallments = currentPrice => {
        return (currentPrice / 6).toFixed(2);
    };

    return (
        <section className="container-product" onClick={() => handleShowProduct(product)}>
            <img src={image} alt="" />
            <span className="name">{name}</span>
            <div className="container-price">
                <span className="old">R$ {oldPrice.toFixed(2)}</span>
                <span className="current">R$ {currentPrice.toFixed(2)}</span>
            </div>
            <div className="container-installments">
                <span className="installments">6x R$ {handleInstallments(currentPrice)}</span>
                <span className="interests">Sem juros</span>
            </div>
        </section>
    );
};

export default Product;
