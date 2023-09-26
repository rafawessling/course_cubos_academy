import UsersIcon from '../../assets/users.svg';
import Empty from '../Empty';
import UsersReport from '../UsersReport/index.js';
import useUser from '../../hooks/useUser.js';
import './styles.css';

function UsersList() {
    const { usersData, setUsersData, setUserInEditing } = useUser();

    function handleDeleteUser(userId) {
        const localUsersData = [...usersData];

        const index = localUsersData.findIndex(item => item.id === userId);

        localUsersData.splice(index, 1);

        setUsersData(localUsersData);
    }

    return (
        <div className="right">
            {usersData.length > 0 && (
                <div className="container-lines">
                    {usersData.map(user => (
                        <ul key={user.id}>
                            <li className="name">{user.name}</li>
                            <li>{user.age}</li>
                            <li>
                                <button onClick={() => setUserInEditing(user)}>Editar</button>
                                <button onClick={() => handleDeleteUser(user.id)}>Deletar</button>
                            </li>
                        </ul>
                    ))}
                </div>
            )}
            {!usersData.length && (
                <Empty icon={UsersIcon} message="Não existem usuários cadastrados..." iconSize="50" />
            )}
            <UsersReport />
        </div>
    );
}

export default UsersList;
