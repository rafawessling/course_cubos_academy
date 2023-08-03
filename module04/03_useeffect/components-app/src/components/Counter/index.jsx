import React, { useEffect, useState } from 'react';
import './style.css';

const Counter = ({ handleChangeText }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        handleChangeText('Montagem Counter');

        return () => {
            handleChangeText('Desmontagem Counter');
        };
    }, []);

    useEffect(() => {
        console.log('Atualizando');
    }, [count]);

    return (
        <div className="container">
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            {console.log('Montagem')}
        </div>
    );
};

export default Counter;
