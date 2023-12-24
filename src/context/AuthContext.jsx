import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  userRole: null,
  login: async () => { },
  logout: () => { },
});

const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);

  const login = async (userData) => {
    setUserRole(userData.userRole);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const logout = () => {
    setUserRole(null);  //hedi jsp ila tmshi
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
