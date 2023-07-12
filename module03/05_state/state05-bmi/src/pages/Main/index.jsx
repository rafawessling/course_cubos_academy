import { useEffect, useState } from 'react';
import './style.css';

const Main = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [result, setResult] = useState(0);
    const [classe, setClasse] = useState('');

    function handleHeight(event) {
        const heightInput = event.target.value;

        setHeight(parseFloat(heightInput));
    }

    function handleWeight(event) {
        const weightInput = event.target.value;

        setWeight(parseFloat(weightInput));
    }

    function handleCalculate() {
        if (weight > 0 && height > 0) {
            const resultBMI = weight / (height / 100) ** 2;

            setResult(resultBMI.toFixed(2));
        }

        return;
    }

    function handleClassification() {
        if (result < 18.5) {
            setClasse('Underweight');
        } else if (result >= 18.5 && result < 25) {
            setClasse('Normal');
        } else if (result >= 25 && result < 30) {
            setClasse('Overweight');
        } else if (result >= 30 && result < 35) {
            setClasse('Obese Class I');
        } else if (result >= 35 && result < 40) {
            setClasse('Obese Class II');
        } else if (result >= 40) {
            setClasse('Obese Class III');
        }
    }

    useEffect(() => {
        handleClassification();
    }, [result]);

    return (
        <>
            <div className="container">
                <div className="container-calc">
                    <h1>Calculate your BMI</h1>

                    <div>
                        <p>Height: {height}</p>
                        <input onChange={event => handleHeight(event)} type="number" />
                        <p>Weight: {weight}</p>
                        <input onChange={event => handleWeight(event)} type="number" />
                    </div>

                    <button onClick={() => handleCalculate()}>Calcular</button>

                    <p>Result: {result}</p>
                    <p>{classe}</p>
                </div>
            </div>
        </>
    );
};

export default Main;
