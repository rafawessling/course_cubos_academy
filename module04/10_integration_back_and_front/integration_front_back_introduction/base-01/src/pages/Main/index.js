import './styles.css';
import api from '../../services/api.js';
import { useEffect, useState } from 'react';

function Main() {
    const userDefault = { name: '', email: '', password: '' };

    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        ...userDefault,
    });
    const [currentUser, setCurrentUser] = useState(null);
    const [currentUserDetail, setCurrentUserDetail] = useState(null);

    const loadUsers = async () => {
        try {
            const response = await api.get('/users');

            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (!form.name || !form.email || !form.password) {
            return;
        }

        if (currentUser) {
            await handleUpdateUser();
            return;
        }

        await handleAddUser();
    };

    const handleAddUser = async () => {
        try {
            const response = await api.post('/users', {
                ...form,
            });

            setUsers([...users, response.data]);
            handleClearForm();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteUser = async id => {
        try {
            await api.delete(`/users/${id}`);

            const localUsers = [...users];

            const indexUser = localUsers.findIndex(user => user.id === id);

            localUsers.splice(indexUser, 1);

            setUsers(localUsers);
            handleClearForm();
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdateUser = async () => {
        try {
            const response = await api.put(`/users/${currentUser.id}`, {
                ...form,
            });

            const localUsers = [...users];

            const userUpdated = localUsers.find(user => user.id === currentUser.id);

            const { name, email, password } = response.data;

            userUpdated.name = name;
            userUpdated.email = email;
            userUpdated.password = password;

            setUsers(localUsers);
            handleClearForm();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSelectCurrentUser = user => {
        setCurrentUser(user);
        setForm({ ...user });
    };

    const handleChangeInputValue = event => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleClearForm = () => {
        setCurrentUser(null);
        setForm({ ...userDefault });
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <main className="container-main">
            <form className="square" onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChangeInputValue} />
                <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChangeInputValue}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChangeInputValue}
                />
                <button>{currentUser ? 'Edit' : 'Register'}</button>
                <button type="button" onClick={handleClearForm}>
                    Clear
                </button>
            </form>
            <section className="square">
                {users.map(user => (
                    <div key={user.id} className="users">
                        <h3>{user.name}</h3>
                        <div>
                            <button onClick={() => handleSelectCurrentUser(user)}>Edit</button>
                            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            <button onClick={() => setCurrentUserDetail(user)}>Details</button>
                        </div>
                    </div>
                ))}
                <div className="current-user-detail">
                    {currentUserDetail && (
                        <>
                            <h4>Current User</h4>
                            <span>{currentUserDetail.name}</span>
                            <span>{currentUserDetail.email}</span>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}

export default Main;
