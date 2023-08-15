import Users from '../../components/Users';
import './style.css';
import { useState } from 'react';

function Main() {
    const [showUsers, setShowUsers] = useState(false);

    return (
        <div className={!showUsers ? 'container open' : 'container close'}>
            {!showUsers ? (
                <button className="btn-open" onClick={() => setShowUsers(true)}>
                    Open
                </button>
            ) : (
                <Users showUsers={showUsers} setShowUsers={setShowUsers} />
            )}
        </div>
    );
}

export default Main;
