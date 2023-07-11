import React from 'react';
import './App.css';
import { useRef } from 'react';

const App = () => {
    const inputRef = useRef(null);
    const ulRef = useRef(null);

    function handleAddTask() {
        if (!inputRef.current.value) {
            return;
        }

        const li = document.createElement('li');

        li.appendChild(document.createTextNode(inputRef.current.value));
        ulRef.current.appendChild(li);

        inputRef.current.value = '';
    }

    return (
        <div className="App">
            <div>
                <input type="text" placeholder="Add new task" ref={inputRef} />
                <button onClick={() => handleAddTask()}>Add</button>
            </div>
            <ul ref={ulRef}></ul>
        </div>
    );
};

export default App;
