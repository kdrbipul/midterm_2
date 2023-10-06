import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './../firebase/firebase.config';



const auth = getAuth(app);


export const AuthContext = createContext()

const ContextApi = ({children}) => {

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const 

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)

    }

    const authInfo = {
        createUser,
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