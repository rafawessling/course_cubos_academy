import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';
import './App.css';

function App() {
    const [value, setValue, remove] = useLocalStorage('user', { name: 'Joana', age: 30 });

    useEffect(() => {
        console.log('mudou o valor');
    }, [value]);

    return (
        <div className="App">
            <div>
                <h1>useLocalStorage</h1>
                <div>Value: {value.name}</div>
                <button onClick={() => setValue({ name: 'João', age: 50 })}>bar</button>
                <button onClick={() => remove()}>Remove</button>
            </div>
        </div>
    );
}

export default App;
