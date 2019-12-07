import React, { createContext, FC, useEffect, useState } from "react";
import { auth } from "src/setup";

const AuthContext = createContext(
  {} as {
    currentUser: firebase.User;
    setCurrentUser: any;
  }
);

const AuthContextProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user);
    });
  }, []);

  console.log(currentUser);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
