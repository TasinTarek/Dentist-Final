import React, { createContext } from 'react';
import useFirebase from '../hooks/Userfirebase';

export const AuthContext = createContext();

const AuthProviderr = ({children}) => {
   const allContext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviderr;