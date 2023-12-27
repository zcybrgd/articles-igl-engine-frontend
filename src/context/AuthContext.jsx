import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  userRole: null,
  userName: null,
  login: async () => { },
  logout: () => { },
});

const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("");
  const [userName, setUserName] = useState("");
  const login = async (userData) => {
    setUserRole(userData.userRole);
    setUserName(userData.userName);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const logout = () => {
    setUserRole(null);  
  };

  return (
    <AuthContext.Provider value={{ userRole, userName ,login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
