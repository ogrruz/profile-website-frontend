import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = props => {
  const [jwtToken, setJwtToken] = useState(null);

  return (
    <AuthContext.Provider value={[ jwtToken, setJwtToken ]}>
      {props.children}
    </AuthContext.Provider>
  );
}
