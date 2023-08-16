import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

function Users() {
    const { id } = useParams();

    const [users, setUsers] = useState([
        { id: 1, name: 'João' },
        { id: 2, name: 'Daniel' },
    ]);

    function handleReturnCurrentUser() {
        const currentUser = users.find(user => user.id === parseInt(id, 10));
        return currentUser.name;
    }

    return (
        <div className="container">
            {!id ? (
                <div className="content-users">
                    {users.map(user => (
                        <h1 key={user.id}>{user.name}</h1>
                    ))}
                </div>
            ) : (
                <h1>{handleReturnCurrentUser()}</h1>
            )}
        </div>
    );
}

export default Users;
