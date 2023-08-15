import './style.css';
import logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <header className="container-header">
            <div>
                <h1>Moda Masculina</h1>
                <h4>Sapatos Sociais - Casuais - Esporte Fino</h4>
            </div>
            <img src={logo} alt="" />
        </header>
    );
};

export default Header;
