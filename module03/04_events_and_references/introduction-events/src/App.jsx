import React from 'react';
import './App.css';

const App = () => {
    function handleAddTask() {
        const input = document.querySelector('#input-task');
        const ul = document.querySelector('ul');

        if (!input.value) {
            return;
        }

        const li = document.createElement('li');

        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);

        input.value = '';
    }

    function handleInput(event) {
        const h2 = document.querySelector('h2');

        h2.innerText = event.target.value;
    }

    function handleMouseOver() {
        const h1 = document.querySelector('h1');
        h1.innerText = 'You are hovering over the text.';
    }
    function handleMouseLeave() {
        const h1 = document.querySelector('h1');
        h1.innerText = 'You have moved the mouse over the text.';
    }

    return (
        <div className="App">
            <div>
                <input type="text" placeholder="Add new task" id="input-task" />
                <button onClick={() => handleAddTask()}>Add</button>
            </div>
            <ul></ul>

            <input type="text" placeholder="Add your message here" onInput={event => handleInput(event)} id="input" />
            <h2></h2>

            <strong onMouseOver={() => handleMouseOver()} onMouseLeave={() => handleMouseLeave()}>
                Mouse over here.
            </strong>
            <h1></h1>
        </div>
    );
};

export default App;
