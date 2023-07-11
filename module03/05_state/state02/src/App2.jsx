import React, { useState } from 'react';
import './App.css';

const App = () => {
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
        {
            id: 3,
            name: 'Movie 3',
            active: false,
        },
        {
            id: 4,
            name: 'Movie 4',
            active: true,
        },
        {
            id: 5,
            name: 'Movie 5',
            active: false,
        },
        {
            id: 6,
            name: 'Movie 6',
            active: true,
        },
    ]);

    function handleFilterActives() {
        const onlyActives = movies.filter(movie => movie.active);
    }

    function handleChangeActives() {
        const localMovies = [...movies];

        localMovies.forEach(movie => (movie.active = true));

        setMovies(localMovies);
    }

    return (
        <div className="App">
            <ul>{movies.map(movie => movie.active && <li key={movie.id}>{movie.name}</li>)}</ul>
            <button onClick={() => handleFilterActives()}>Only actives</button>
            <button onClick={() => handleChangeActives()}>Activate all movies</button>
        </div>
    );
};

export default App;
