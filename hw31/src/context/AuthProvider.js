import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const login = () => setIsAuthenticated(true);
    const logOut = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}