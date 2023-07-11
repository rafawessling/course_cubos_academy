import './style.css';

function Header({ handleToggleModal }) {
    return (
        <header className="header">
            <h1>My Blog</h1>
            <button className="btn-primary" onClick={handleToggleModal}>
                Create post
            </button>
        </header>
    );
}

export default Header;
