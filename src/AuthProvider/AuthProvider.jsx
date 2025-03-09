import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,signInWithPopup,signOut     } from "firebase/auth";
import auth from "../firebase/firebase";
const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const newUser = (email, password) => {
    setLoader(true);
   return createUserWithEmailAndPassword(auth,email,password);
  };
  const signIn = (email,password)=>{
    setLoader(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,changedUser=>{
        setUser(changedUser)
        setLoader(false)
    })
    return ()=> unsubscribe();
  },[])
const googleLogin = ()=>{
    setLoader(true);
    return signInWithPopup(auth,provider);
}

const signOutUser = ()=>{
    setLoader(true);
    return signOut(auth);
}
  const authInfo = {
    user,
    loader,
    newUser,
    signIn,
    googleLogin,
    signOutUser
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
