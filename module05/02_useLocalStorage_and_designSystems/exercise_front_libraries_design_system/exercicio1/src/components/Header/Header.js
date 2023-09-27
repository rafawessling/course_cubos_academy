import Logo from '../../assets/logo-icon.svg';
import './Header.css';

const Header = () => {
    return (
        <section className="container-header">
            <img src={Logo} alt="" />
            <strong>Market Cubos</strong>
        </section>
    );
};

export default Header;
