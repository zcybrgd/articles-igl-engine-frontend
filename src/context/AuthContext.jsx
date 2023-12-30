import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
    userRole: null,
    userName: null,
    token: null,
    id: null,
    login: async () => { },
    logout: () => { },
});

const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState("");
    const [userName, setUserName] = useState("");
    const [token, setToken] = useState("");
    const [id, setId] = useState(0)
    const login = async (userData) => {
        setUserRole(userData.userRole);
        setUserName(userData.userName);
        setToken(userData.token);
        setId(userData.id)
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    const logout = () => {
        setUserRole(null);
    };

    return (
        <AuthContext.Provider value={{ userRole, userName, token, id , login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };