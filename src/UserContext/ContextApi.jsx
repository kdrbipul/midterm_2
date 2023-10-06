import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";
import app from './../firebase/firebase.config';



const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


export const AuthContext = createContext()

const ContextApi = ({children}) => {

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

    const authInfo = {
        createUser,
        googleLogin,
        gitHubLogin,
        // emailVerify,
        forgatePassword,
        signInUser,
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