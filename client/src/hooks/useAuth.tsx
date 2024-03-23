// src/hooks/useAuth.tsx
import { createContext, useContext, ReactNode, useState } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!Cookies.get('token'));

  const login = (token: string) => {
    Cookies.set('token', token, { expires: 7, secure: true, sameSite: 'strict', httpOnly: true });
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
