import { createContext, useContext, useState } from 'react';
import { HashLoader } from "react-spinners"

const AuthContext = createContext({
    userRole: null,
    userName: null,
    token: null,
    id: null,
    login: async () => { },
    logout: () => { },
});

const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userRole, setUserRole] = useState("");
    const [userName, setUserName] = useState("");
    const [token, setToken] = useState("");
    const [id, setId] = useState(0)

    const login = async (userData) => {
        setIsLoading(true)
        setUserRole(userData.userRole);
        setUserName(userData.userName);
        setToken(userData.token);
        setId(userData.id)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false)
    };

    const logout = () => {
        setUserRole(null);
    };

    if (isLoading) {
        return (
            <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center">
                <HashLoader color="#707F65" />
            </div>
        );
    }
    return (
        <AuthContext.Provider value={{ userRole, userName, token, id, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };