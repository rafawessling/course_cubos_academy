import './style.css';
import ImageProduct from '../../assets/product.jpg';

function ProductCard({ product }) {
    const { name, description, price } = product;
    return (
        <div className="card">
            <img src={ImageProduct} alt="Product" />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>R$ {price.toFixed(2)}</p>

                <button>Buy</button>
            </div>
        </div>
    );
}

export default ProductCard;
