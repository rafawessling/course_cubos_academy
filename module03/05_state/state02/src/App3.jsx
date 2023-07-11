import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [car, setCar] = useState({
        id: 1,
        name: 'Corolla',
        color: 'black',
        year: 2021,
    });

    function handleChangeYear(year) {
        setCar({
            ...car,
            year: year,
        });
    }

    return (
        <div className="App">
            <h1>{car.name}</h1>
            <h1>{car.color}</h1>
            <h1>{car.year}</h1>

            <div>
                <button onClick={() => handleChangeYear(2019)}>2019</button>
                <button onClick={() => handleChangeYear(2020)}>2020</button>
                <button onClick={() => handleChangeYear(2021)}>2021</button>
                <button onClick={() => handleChangeYear(2022)}>2022</button>
            </div>
        </div>
    );
};

export default App;
