import './style.css';
import Logo from '../../assets/logo.png';

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" />
        </header>
    );
}

export default Header;
