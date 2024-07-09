import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebasr.init";

export const AuthContext=createContext(null)


const ContextApi = ({children}) => {
    const [user,setUser]=useState(null)

    const [loading, setLoading]=useState(true)


    const registerForm=(email,password)=>{
        setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
      
    }

    const logInForm=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
        .then(()=>console.log("successfully log out"))
        .catch(error=>console.error(error))
    }



useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log(currentUser)
        setLoading(false)
    })
    return ()=>{
        unSubscribe()
    }
},[])

    const authInfo={user,registerForm,logInForm,logOut,loading}
    // console.log(authInfo)





    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

        
    );
};

export default ContextApi;