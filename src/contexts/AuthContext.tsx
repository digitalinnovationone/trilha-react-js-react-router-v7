import { createContext, ReactNode, useEffect, useState } from "react";
import { AuthContextType } from "../types/authContext";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Valida se existe um token salvo no localstorage na primeira renderização
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      return;
    }

    // validate jwt
    setIsAuthenticated(true);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("authToken", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

