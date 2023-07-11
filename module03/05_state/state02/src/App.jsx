import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState('Teste');
    const [open, setOpen] = useState(true);
    const [car, setCar] = useState({
        id: 1,
        name: 'Corolla',
        color: 'black',
    });
    const [movies, setMovies] = useState([
        {
            id: 1,
            name: 'Movie 1',
            active: false,
        },
        {
            id: 2,
            name: 'Movie 2',
            active: true,
        },
    ]);
    const [job, setJob] = useState(null);

    return (
        <div className="App">
            <h1>{number}</h1>
            <h1>{name}</h1>
            <h1>{open ? 'true' : 'false'}</h1>
            <h1>{car.name}</h1>
            <h1>{movies[0].name}</h1>
            <h1>{job ? 'Job ok' : 'Job not ok'}</h1>
        </div>
    );
};

export default App;
