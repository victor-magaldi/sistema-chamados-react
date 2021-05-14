import React, { createContext, useEffect, useState } from "react";
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadingStorage() {
      const storageUser = localStorage.getItem("sistemaUser");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadingStorage();
  }, []);

  async function signUp(email, password, name) {
    setLoadingAuth(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        console.log(value);
        // aqui é feito a relação do uid devolvido pelo create createUserWithEmailAndPassword
        // com a coleção users
        const uid = value.user.uid;
        await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set({
            email: email,
            name: name,
            avatarUrl: null,
          })
          .then(() => {
            const data = {
              email: email,
              name: name,
              uid: uid,
              avatarUrl: null,
            };
            setUser(data);
            localStoraUser(data);
            loadingAuth(false);
          });
      })
      .catch((error) => console.log("erro ao criar o usuario", error));
  }

  function localStoraUser(dataUser) {
    localStorage.setItem("sistemaUser", JSON.stringify(dataUser));
  }

  async function signOut() {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("sistemaUser");
        setUser(null);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
