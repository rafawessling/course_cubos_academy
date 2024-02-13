import { useState } from 'react';
import './Counter.css';

type Props = {
    title: string;
    initialValue?: number;
};

function Counter({ title, initialValue }: Props) {
    const [count, setCount] = useState(initialValue || 0);

    function handleChangeValue(value: number) {
        const nextValue = count + value;

        if (nextValue <= 0) {
            return;
        }

        setCount(nextValue);
    }

    return (
        <div className="container-counter">
            <h1>{title}</h1>

            <div className="content-counter">
                <h2>Current count: {count}</h2>
                <button onClick={() => handleChangeValue(1)}>Increase</button>
                <button onClick={() => handleChangeValue(-1)}>Decrease</button>
            </div>
        </div>
    );
}

export default Counter;
