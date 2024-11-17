import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logOut = () =>{
        setLoading(true)

        return signOut(auth);
        
    }
    // login user 
    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
        

    }
    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser,updatedData)


    }
    const authInfo = {
     
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile,
    
    };
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("Auth state changed:", currentUser);
            setUser(currentUser);
            setLoading(false)
            

        })
        return () => {
            unsubscribe();

        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;