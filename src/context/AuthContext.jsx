import { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();
const auth = getAuth();
export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState('');

    const value = {
        user,
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            console.log(user);
            setUser(user);
        });
        return () => {
            unsubscribed();
        };
    }, []);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}