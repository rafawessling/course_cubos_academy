import './style.css';
import { Link, Outlet, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container-nav">
            <nav>
                <div className="content-links">
                    <NavLink className={({ isActive }) => (isActive ? 'link-selected' : '')} to="/dashboard">
                        <h2>Dashboard</h2>
                    </NavLink>

                    <NavLink className={({ isActive }) => (isActive ? 'link-selected' : '')} to="/users">
                        Users
                    </NavLink>
                </div>
                <Link to="/sign-in">Sair</Link>
            </nav>
            <div className="content-page">
                <Outlet />
            </div>
        </div>
    );
}

export default Navbar;
