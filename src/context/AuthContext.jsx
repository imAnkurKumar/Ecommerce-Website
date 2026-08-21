import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(
        localStorage.getItem("token")
    );

    const [email, setEmail] = useState(
        localStorage.getItem("email")
    );

    const login = (token, email) => {
        setToken(token);
        setEmail(email);

        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
    };

    const logout = () => {
        setToken(null);
        setEmail(null);

        localStorage.removeItem("token");
        localStorage.removeItem("email");
    };

    return (
        <AuthContext.Provider
            value={{
                token,
                email,
                login,
                logout,
                isLoggedIn: !!token,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};