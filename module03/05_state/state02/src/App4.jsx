import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(countPrev => {
            return countPrev + 1;
        });
    }

    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={() => handleIncrement()}>Increment</button>
        </div>
    );
};

export default App;
