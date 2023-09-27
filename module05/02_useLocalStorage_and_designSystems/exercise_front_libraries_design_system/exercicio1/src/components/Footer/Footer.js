import BtnCancelar from '../../components/BtnCancelar/BtnCancelar';
import BtnAddProduto from '../../components/BtnAddProduto/BtnAddProduto';
import Success from '../Success/Success';
import './Footer.css';

const Footer = () => {
    return (
        <section className="container-footer">
            <section className="right-side-footer">
                <BtnCancelar />
                <BtnAddProduto />
            </section>
            <Success />
        </section>
    );
};

export default Footer;
