import './style.css';
import { useEffect } from 'react';

function Users({ showUsers, setShowUsers }) {
    const users = [
        {
            id: 1,
            nome: 'Joana',
        },
        {
            id: 2,
            nome: 'José',
        },
        {
            id: 3,
            nome: 'Ana',
        },
        {
            id: 4,
            nome: 'Pedro',
        },
        {
            id: 5,
            nome: 'João',
        },
    ];

    return (
        <div className="container-users">
            <strong>Users</strong>
            {users.map(user => (
                <div key={user.id}>
                    <span className="user-name">{user.nome}</span>
                </div>
            ))}
            <button onClick={() => setShowUsers(false)}>Close</button>
        </div>
    );
}

export default Users;
