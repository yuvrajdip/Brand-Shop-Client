import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loader , setLoader ]= useState(true);
  
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  }

  const loginWithEmailPassword = (email , password)=>{
    setLoader(true);
    return signInWithEmailAndPassword(auth , email , password);
  }

  const register = (email, password) =>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email, password);
  }

  const logOut = ()=>{
    setLoader(true);
    return signOut(auth);
  }  

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      if(currentUser){
        console.log(currentUser);

        setUser(currentUser);
        
        setLoader(false);
      }
      else{
        console.log(currentUser);
        setUser(null);

        setLoader(false);
      }
    });

    return ()=>{
      unSubscribe();
    }
  },[]);


  const authInfo = {
    user,
    signInWithGoogle,
    loginWithEmailPassword,
    register,
    loader,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;