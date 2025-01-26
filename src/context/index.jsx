/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {

  const navigate = useNavigate();

  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function registerWithFirebase() {
    const { email, password } = registerFormData;
    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error registering user", error);
      throw error;
    }finally {
      setLoading(false);
    }
  };

  const loginWithFirebase = () => {
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential)
      .catch((error) => {
        console.error("Login Error:", error);
        return null;
      });
  };

  function handleLogout(){
    return signOut(auth);
  }

  useState(() => {
    // const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
    //   setUser(currentUser);
    // });

    // return () => {
    //   checkAuthState();
    // };

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  // console.log(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        registerFormData,
        loginFormData,
        setRegisterFormData,
        registerWithFirebase,
        loginWithFirebase,
        setLoginFormData,
        handleLogout,
        setUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
