import './style.css';

function Dashboard({ count, setCount }) {
    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

export default Dashboard;
