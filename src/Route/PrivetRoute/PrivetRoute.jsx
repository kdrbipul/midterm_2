import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './../../UserContext/ContextApi';
import Loading from './../../Shared/Loading/Loading';

const PrivetRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext)

    if(loading){
        return <Loading />
    }

    if(user){
        return children;
    }
    return <Navigate to='/signin' />
    
};

export default PrivetRoute;