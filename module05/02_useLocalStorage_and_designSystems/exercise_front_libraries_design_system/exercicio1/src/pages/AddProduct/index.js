import Header from '../../components/Header/Header';
import NomeLoja from '../../components/NomeLoja/NomeLoja';
import AddProduto from '../../components/AddProduto/AddProduto';
import './styles.css';
import Footer from '../../components/Footer/Footer';

function AddProduct() {
    return (
        <section className="container-add-product">
            <Header />
            <main className="content-add-product">
                <section className="upper-section">
                    <NomeLoja>Adicionar Produto</NomeLoja>
                </section>
                <AddProduto />
            </main>
            <Footer />
        </section>
    );
}

export default AddProduct;
