import React from 'react';
import './App.css';
import { useRef } from 'react';

const App = () => {
    const movies = [
        { id: 1, name: 'O Poderoso Chefão' },
        { id: 2, name: 'O Senhor dos Anéis: O Retorno do Rei' },
        { id: 3, name: 'O Curioso Caso de Benjamin Button' },
        { id: 4, name: 'A Origem' },
        { id: 5, name: 'A Lista de Schindler' },
        { id: 6, name: 'O Resgate do Soldado Ryan' },
        { id: 7, name: 'O Grande Lebowski' },
        { id: 8, name: 'O Iluminado' },
        { id: 9, name: 'Blade Runner' },
        { id: 10, name: 'Clube da Luta' },
    ];

    const inputRef = useRef(null);

    function searchMovie() {
        if (!inputRef.current.value.trim()) {
            return;
        }

        const moviesLi = document.querySelectorAll('li');

        for (const movie of moviesLi) {
            if (movie.textContent.toLowerCase().includes(inputRef.current.value.toLowerCase())) {
                movie.style.display = 'block';
                continue;
            }

            movie.style.display = 'none';
        }
    }

    function clearSearch() {
        const moviesLi = document.querySelectorAll('li');

        for (const movie of moviesLi) {
            movie.style.display = 'block';
        }
        inputRef.current.value = '';
    }

    return (
        <div className="container">
            <div>
                <input type="text" placeholder="Search" ref={inputRef} />
                <button onClick={searchMovie}>Search</button>
                <button onClick={clearSearch}>Clean</button>
            </div>

            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>{movie.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
