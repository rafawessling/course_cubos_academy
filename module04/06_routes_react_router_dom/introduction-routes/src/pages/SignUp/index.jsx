import { Link } from 'react-router-dom';
import './style.css';

function SignUp() {
    return (
        <div className="container">
            <h1>SignUp</h1>
            <div>
                <Link to="/sign-in">Login</Link>
            </div>
        </div>
    );
}

export default SignUp;
