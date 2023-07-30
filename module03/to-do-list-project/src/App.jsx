import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from 'react-icons/bs';

const API = 'http://localhost:5000';

const App = () => {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [toDo, setToDo] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();

        setTitle('');
    };

    return (
        <div className="App">
            <div className="to-do-header">
                <h1>React To Do List</h1>
            </div>
            <div className="form-to-do">
                <h2>Enter your next task:</h2>
                <form onSumit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="title">What will you do?</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Task title"
                            onChange={event => setTitle(event.target.value)}
                            value={title || ''}
                            required
                        ></input>
                    </div>
                    <div className="form-control">
                        <label htmlFor="time">Task duration:</label>
                        <input
                            type="text"
                            name="time"
                            placeholder="Estimated time (in hours)"
                            onChange={event => setTime(event.target.value)}
                            value={time || ''}
                            required
                        ></input>
                    </div>
                    <input type="submit" value="Creat Task" />
                </form>
            </div>
            <div className="list-to-do">
                <h2>To Do List:</h2>
                {toDo.length === 0 && <p>There is no tasks!</p>}
            </div>
        </div>
    );
};

export default App;
