
import { createUserWithEmailAndPassword,
     GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, 
     signInWithPopup, 
     signOut,
     updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const Authcontext = createContext(null);

export const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinwithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
 
 }
 const UpdateProfile=(name,photoUrl)=>{
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL:photoUrl
    })
  }

 useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);



 const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
 const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const info = {
    createUser,
    signinwithGoogle,
    logout,
    signIn,loading,user,UpdateProfile

  };
  return <Authcontext.Provider value={info}>{children}</Authcontext.Provider>;
};
