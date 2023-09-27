import BtnAddProduto from '../../components/BtnAddProduto/BtnAddProduto';
import CardProduto from '../../components/CardProduto/CardProduto';
import Header from '../../components/Header/Header';
import NomeLoja from '../../components/NomeLoja/NomeLoja';
import './styles.css';

function Main() {
    return (
        <section className="container-main">
            <Header />
            <section className="upper-section-main">
                <NomeLoja>Seus Produtos</NomeLoja>
                <BtnAddProduto />
            </section>
            <section className="cards-produtos">
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
                <CardProduto />
            </section>
        </section>
    );
}

export default Main;
