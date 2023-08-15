import './style.css';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import logo from '../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="container-footer">
            <section className="footer-left">
                <div className="address">
                    <strong>Endereco:</strong>
                    <span>Rua Cubos, 10</span>
                    <span>Jardim Academy</span>
                    <span>Salvador - Bahia - CEP 41820-021</span>
                </div>

                <div className="contact">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </section>
            <section className="footer-right">
                <img src={logo} alt="" />
            </section>
        </footer>
    );
};

export default Footer;
