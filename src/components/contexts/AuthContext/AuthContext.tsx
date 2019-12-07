import React, { createContext, FC, useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "src/setup";

const AuthContext = createContext(
  {} as {
    currentUser: firebase.User;
  }
);

const AuthContextProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        if (userRef !== null) {
          userRef.onSnapshot(
            (snapShot: firebase.firestore.DocumentSnapshot) => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
            }
          );
        } else {
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  console.log("currentUser:", currentUser);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
