import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [jwtToken, setJwtToken] = useState(null);

  const saveJwt = (token) => {
    setJwtToken(token);
  };

  const dropJwt = () => {
    setJwtToken(null);
  };

  const getJwt = () => {
    return jwtToken;
  }

  return (
    <AuthContext.Provider value={{ jwtToken, saveJwt, dropJwt, getJwt }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
