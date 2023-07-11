import React from 'react';
import './App.css';
import { useRef } from 'react';

const App2 = () => {
    let count = 0;
    const countRef = useRef(0);
    const spanRef = useRef(null);
    const spanLetRef = useRef(null);

    function incrementRef() {
        countRef.current += 1;
        spanRef.current.innerText = countRef.current;
    }

    function incrementLet() {
        count += 1;
        spanLetRef.current.innerText = count;
    }

    return (
        <div className="App">
            <div>
                <button onClick={() => incrementRef()}>Increment useRef</button>
                <div>
                    <strong>Valor do useRef</strong>
                    <span ref={spanRef}>{countRef.current}</span>
                </div>
            </div>
            <div>
                <button onClick={() => incrementLet()}>Increment let</button>
                <div>
                    <strong>Valor do useRef</strong>
                    <span ref={spanLetRef}>{count}</span>
                </div>
            </div>
        </div>
    );
};

export default App2;
