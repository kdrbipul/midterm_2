import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, sendEmailVerification, sendPasswordResetEmail, onAuthStateChanged, signOut } from "firebase/auth";
import app from './../firebase/firebase.config';



const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext()

const ContextApi = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const gitHubLogin = () => {
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
        const unsubscribe = onAuthStateChanged(auth, currenUser=>{
            setUser(currenUser);
        })
        return ()=>{
            unsubscribe();
        }
    })

    const authInfo = {
        createUser,
        googleLogin,
        gitHubLogin,
        // emailVerify,
        forgatePassword,
        signInUser,
        logOut,
        user,
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