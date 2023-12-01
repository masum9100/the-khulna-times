import React, { useContext } from 'react';
// import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {

    const {user, loading}=useAuth()
    const location = useLocation()
    if (loading){
        return <span className="loading loading-spinner loading-lg mx-auto my-auto"></span>

    }
    if (user && !loading){
        return children
    }

    return (
        <Navigate state={location.pathname} to={"/login"}></Navigate>
    );
};

export default PrivateRoute;