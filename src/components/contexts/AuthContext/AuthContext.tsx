import React, { createContext, FC, useEffect, useState } from "react";
import { auth, createUserProfileDocument } from "src/setup";

const AuthContext = createContext(
  {} as {
    currentUser: any;
    currentUserIsLoaded: boolean;
  }
);

const AuthContextProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [currentUserIsLoaded, setCurrentUserIsLoaded] = useState<boolean>(
    false
  );

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
          setCurrentUserIsLoaded(true);
        } else {
          setCurrentUser(null);
          setCurrentUserIsLoaded(true);
        }
      } else {
        setCurrentUser(null);
        setCurrentUserIsLoaded(false);
      }
    });
  }, []);

  // console.log("currentUser:", currentUser);

  return (
    <AuthContext.Provider value={{ currentUser, currentUserIsLoaded }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
