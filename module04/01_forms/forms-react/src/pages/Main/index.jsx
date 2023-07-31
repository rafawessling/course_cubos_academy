import './style.css';
import { useState } from 'react';

const Main = () => {
    const [form, setForm] = useState({
        name: '',
        age: 0,
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [select, setSelect] = useState({ id: '', name: '' });
    const [options, setOptions] = useState([
        {
            id: 1,
            name: 'Cash',
        },
        {
            id: 2,
            name: 'Credit Card',
        },
        {
            id: 3,
            name: 'Debit Card',
        },
    ]);

    const handleSubmit = event => {
        event.preventDefault();

        setError('');
        setSuccess('');

        if (!form.name) {
            setError('Name is required...');
            return;
        }

        if (form.age < 18) {
            setError('You need to be of legal age...');
            return;
        }

        if (form.password.length < 8) {
            setError('The password has to consist of at least 8 characters...');
            return;
        }

        setSuccess('Registered successfully!');
    };

    const clearForm = () => {
        setError('');
        setSuccess('');

        setForm({
            name: '',
            age: 0,
            password: '',
        });
    };

    const handleChangeForm = event => {
        const value = event.target.value;

        setForm({
            ...form,
            [event.target.name]: value,
        });
    };

    const handleChangeSelect = event => {
        const localOptions = [...options];

        const option = localOptions.find(item => item.id === parseInt(event.target.value));

        setSelect({
            id: option.id,
            name: option.name,
        });
    };

    return (
        <div className="container-main">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={event => handleChangeForm(event)}
                />
                <input
                    type="number"
                    name="age"
                    placeholder="Enter your age"
                    value={form.age}
                    onChange={event => handleChangeForm(event)}
                />
                <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={event => handleChangeForm(event)}
                />

                <div>
                    <input
                        type="checkbox"
                        name="show-password"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <label htmlFor="show-password">Show password</label>
                </div>

                <strong>What time do you want to study?</strong>
                <div>
                    <input
                        type="radio"
                        name="morning"
                        value="morning"
                        checked={selectedOption === 'morning'}
                        onChange={() => setSelectedOption('morning')}
                    />
                    <label htmlFor="morning">Morning</label>
                    <input
                        type="radio"
                        name="afternoon"
                        value="afternoon"
                        checked={selectedOption === 'afternoon'}
                        onChange={() => setSelectedOption('afternoon')}
                    />
                    <label htmlFor="afternoon">Afternoon</label>
                    <input
                        type="radio"
                        name="night"
                        value="night"
                        checked={selectedOption === 'night'}
                        onChange={() => setSelectedOption('night')}
                    />
                    <label htmlFor="night">Night</label>
                </div>

                <select value={select.id} onChange={event => handleChangeSelect(event)}>
                    {options.map(item => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>

                {error && <span className="error">{error}</span>}
                {success && <span className="success">{success}</span>}

                <button type="submit">Save</button>
                <button type="button" onClick={clearForm}>
                    Clear
                </button>
            </form>
        </div>
    );
};

export default Main;
