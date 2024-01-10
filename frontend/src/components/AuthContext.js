import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [jwtToken, setJwtToken] = useState(null);

  const login = (token) => {
    setJwtToken(token);
  };

  const logout = () => {
    setJwtToken(null);
  };

  return (
    <AuthContext.Provider value={{ jwtToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
