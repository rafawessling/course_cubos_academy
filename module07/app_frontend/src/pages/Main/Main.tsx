import Counter from '../../components/Counter/Counter';
import './Main.css';

function Main() {
    return (
        <div className="container-main">
            <Counter title="Counter 1" />
            <Counter title="Counter 2" initialValue={10} />
        </div>
    );
}

export default Main;
