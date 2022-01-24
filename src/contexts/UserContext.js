import React, { createContext, useContext, useReducer } from "react"
import { UserReducer, userIntialState } from '../reducers/UserReducer'

export const UserContext  = createContext();

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, userIntialState);

    return (
        <UserContext.Provider value= {{ state, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

function useUser() {
    const context = useContext(UserContext);

    if(context === undefined) {
        throw new Error('useUser must be within a UserProvider');
    }

    return context;
}

export { UserProvider, useUser };