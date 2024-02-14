import { useNavigate } from 'react-router-dom';
import ArrowBack from '../../assets/arrow-back.svg';
import Logo from '../../assets/logo.svg';
import './Header.css';

type Props = {
    showBack?: boolean;
};

function Header({ showBack }: Props) {
    const navigate = useNavigate();

    return (
        <header>
            {showBack && <img src={ArrowBack} alt="arrow back" className="arrow-back" onClick={() => navigate(-1)} />}

            <img src={Logo} alt="logo" />
        </header>
    );
}

export default Header;
