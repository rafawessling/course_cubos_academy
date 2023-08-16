import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function SignIn() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/dashboard');
        }, 1500);
    }, []);

    return (
        <div className="container">
            <h1>SignIn</h1>
            <div>
                <Link to="/dashboard">Entrar</Link>
                <Link to="/sign-up">Cadastre-se</Link>
            </div>
        </div>
    );
}

export default SignIn;
