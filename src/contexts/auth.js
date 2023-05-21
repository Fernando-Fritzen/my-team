import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(true);

  useEffect(() => {
    const apiKey = localStorage.getItem("user_api_key");

    if (apiKey) {
      setSigned(true);
    }
  }, []);

  const signout = () => {
    setSigned(false);
    localStorage.removeItem("user_api_key");
  };

  return (
    <AuthContext.Provider value={{ signed, setSigned,signout }}>
      {children}
    </AuthContext.Provider>
  );
};
