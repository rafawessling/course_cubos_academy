import { useState, useEffect } from 'react';
import './style.css';

function Main() {
    const [success, setSuccess] = useState(false);
    const [name, setName] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = event => {
        event.preventDefault();
    };

    const handleAddUser = () => {
        if (!name) return;

        setUsers([...users, name]);
        setName('');
    };

    useEffect(() => {
        if (users.length) {
            setSuccess(true);
        }
    }, [users]);

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(false);
            }, 1300);
        }
    }, [success]);

    return (
        <main className="container">
            <section>
                <div className="left">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Nome"
                            onChange={event => setName(event.target.value)}
                        />
                        <button onClick={handleAddUser}>Adicionar</button>
                    </form>
                </div>
                <div className="right">
                    <strong>Usuários</strong>
                    <div className="user-names">
                        {users.map(user => (
                            <p key={user}>{user}</p>
                        ))}
                    </div>
                </div>
            </section>
            {success && (
                <div className="success">
                    <p>Novo usuário adicionado!</p>
                </div>
            )}
        </main>
    );
}

export default Main;
