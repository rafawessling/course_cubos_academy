import './style.css';
import Counter from '../../components/Counter/index';
import { useState } from 'react';

const Main = () => {
    const [showCount, setShowCount] = useState(false);
    const [text, setText] = useState('');

    const handleChangeText = newText => {
        setText(newText);
    };

    return (
        <div className="container">
            {text}
            <button onClick={() => setShowCount(!showCount)}>Exibir / Ocultar</button>
            {showCount && <Counter handleChangeText={handleChangeText} />}
        </div>
    );
};

export default Main;
