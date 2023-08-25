import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { setItem, getItem } from '../../utils/storage';
import './styles.css';

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const token = getItem('token');

        if (token) {
            navigate('/main');
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!email || !password) {
                console.log('Preencha todos os campos!');
                return;
            }

            const response = await api.post('/login', {
                email,
                password,
            });

            const { token, user } = response.data;
            setItem('token', token);
            setItem('userId', user.id);

            navigate('/main');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="container">
            <form className="form-sign-in" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="text" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button className="btn-purple">Login</button>
            </form>
        </div>
    );
}

export default SignIn;
