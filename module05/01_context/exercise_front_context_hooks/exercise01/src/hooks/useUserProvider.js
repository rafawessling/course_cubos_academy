import { useState } from 'react';

function useUserProvider() {
    const [usersData, setUsersData] = useState([]);
    const [userInEditing, setUserInEditing] = useState(false);

    return {
        usersData,
        setUsersData,
        userInEditing,
        setUserInEditing,
    };
}

export default useUserProvider;
