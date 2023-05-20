import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const RequireAuth = ({children}) => {

     const [user] = useAuthState(auth);

    if(user){
        return children;
    }else{
        return <Navigate to="/singin" replace/> 
    }
    
};

export default RequireAuth;