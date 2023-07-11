import React, { useState } from 'react';
import './App.css';

const App = () => {
    let [number, setNumber] = useState(0);

    function handleChangeValue(value) {
        const newNumber = number + value;

        if (newNumber < 0) {
            return;
        }
        setNumber(newNumber);
    }

    return (
        <div className="App">
            <div className="container-buttons">
                <button onClick={() => handleChangeValue(-1)}>Decrement (-)</button>
                <h1>{number}</h1>
                <button onClick={() => handleChangeValue(1)}>Increment (+)</button>
            </div>
        </div>
    );
};

export default App;
