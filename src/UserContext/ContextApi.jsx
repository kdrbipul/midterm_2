import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';



const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext()

const ContextApi = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const gitHubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)

    }
    // const emailVerify = () =>{
    //     return sendEmailVerification(auth,currentUser)
    // }

    const forgatePassword = (userEmail) => {
        return sendPasswordResetEmail(auth, userEmail)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        googleLogin,
        gitHubLogin,
        // emailVerify,
        forgatePassword,
        signInUser,
        logOut,
        user,
        loading,
    }

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default ContextApi;