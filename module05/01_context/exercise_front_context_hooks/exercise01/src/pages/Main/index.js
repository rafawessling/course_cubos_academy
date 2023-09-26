import UsersList from '../../components/UsersList/index.js';
import UsersRegister from '../../components/UsersRegister/index.js';
import { UserProvider } from '../../contexts/UserContext.js';
import './styles.css';

export default function Main() {
    return (
        <UserProvider>
            <div className="container-main">
                <UsersRegister />

                <UsersList />
            </div>
        </UserProvider>
    );
}
