import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import axios from "axios";
import app from "../firebase/firebase";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [totalCart, setTotalCart] = useState(0);
  const [userRole, setUserRole] = useState(0);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post(`https://boi-bazar-server-five.vercel.app/authentication`, {
            email: currentUser?.email,
          })
          .then((res) => {
            if (res?.data?.token) {
              localStorage.setItem("token", res.data.token);
              setLoading(false);
            }
          });
        setToggle(!toggle);
      } else {
        localStorage.removeItem("token");
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleCard = (data) => {
    console.log(data);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOut,
    handleCard,
    totalCart,
    setTotalCart,
    toggle,
    setUserRole,
    userRole,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
