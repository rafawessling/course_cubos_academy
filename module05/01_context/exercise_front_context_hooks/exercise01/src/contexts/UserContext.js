import { createContext } from 'react';
import useUserProvider from '../hooks/useUserProvider.js';

const UserContext = createContext({});

const UserProvider = props => {
    const value = useUserProvider();

    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
