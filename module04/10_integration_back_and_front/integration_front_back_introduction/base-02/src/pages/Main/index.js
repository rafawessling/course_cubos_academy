import { useState } from 'react';
import api from '../../services/api';
import { getItem } from '../../utils/storage';
import './styles.css';

function Main() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        linkedIn: '',
        github: '',
        bio: '',
        avatar: '',
        password: '',
        profileName: '',
    });

    const { name, email, linkedIn, github, bio, avatar, password, profileName } = form;

    function handleChangeInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            if (!name || !email || !linkedIn || !github || !bio || !avatar || !password || !profileName) {
                console.log('Todos os campos são obrigatórios!');
                return;
            }
            const userId = getItem('userId');
            const token = getItem('token');

            const response = await api.put(
                `/users/${userId}`,
                {
                    ...form,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        } catch (error) {
            console.log(error.response);
        }
    }
    return (
        <div className="container">
            <form className="form-profile" onSubmit={handleSubmit}>
                <h2>Profile</h2>
                <input name="name" type="text" placeholder="Name" value={name} onChange={handleChangeInput} required />
                <input
                    name="email"
                    type="text"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleChangeInput}
                    required
                />
                <input
                    name="linkedIn"
                    type="text"
                    placeholder="Linkedin"
                    value={linkedIn}
                    onChange={handleChangeInput}
                    required
                />
                <input
                    name="github"
                    type="text"
                    placeholder="Url GitHub"
                    value={github}
                    onChange={handleChangeInput}
                    required
                />
                <input
                    name="avatar"
                    type="text"
                    placeholder="Url Avatar"
                    value={avatar}
                    onChange={handleChangeInput}
                    required
                />
                <input tname="bio" ype="text" placeholder="Bio" value={bio} onChange={handleChangeInput} required />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChangeInput}
                    required
                />
                <input
                    name="profileName"
                    type="text"
                    placeholder="Profile Name"
                    value={profileName}
                    onChange={handleChangeInput}
                    required
                />
                <button className="btn-purple">Salvar</button>
            </form>
        </div>
    );
}

export default Main;
