import { useEffect, useState } from 'react';
import api from '../../services/api.js';
import './styles.css';

function Main() {
    const userDefault = { name: '', email: '', password: '' };

    const [form, setForm] = useState({ ...userDefault });
    const [users, setUsers] = useState([]);

    const { name, email, password } = form;

    function handleChangeInput(event) {
        setForm({ ...form, [event.target.name]: event.target.value });
    }

    async function handleGetUsets() {
        try {
            const response = await api.get('/users');

            setUsers(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function handleRegisterUser() {
        try {
            const response = await api.post('/users', {
                ...form,
            });

            setUsers([...users, response.data]);
            setForm(userDefault);
        } catch (error) {
            console.log(error.message);
        }
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (!name || !email || !password) {
            return;
        }

        await handleRegisterUser();
    }

    useEffect(() => {
        handleGetUsets();
    }, []);

    return (
        <main>
            <form className="register" onSubmit={handleSubmit}>
                <input name="name" type="text" value={name} placeHolder="Name" onChange={handleChangeInput} required />
                <input
                    name="email"
                    type="text"
                    value={email}
                    placeHolder="E-mail"
                    onChange={handleChangeInput}
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={password}
                    placeHolder="Password"
                    onChange={handleChangeInput}
                    required
                />
                <button className="register-btn">Register</button>
            </form>
            <section className="users">
                <strong>Users</strong>
                <div>
                    {users.map(user => (
                        <span key={user.id}>{user.name}</span>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Main;
