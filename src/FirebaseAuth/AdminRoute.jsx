// import React from 'react';
// import useAdmin from '../Hooks/useAdmin';
// import useAuth from '../Hooks/useAuth';
// import { Navigate, useLocation } from 'react-router-dom';

// const AdminRoute = ({ children }) => {
//     const [isAdmin, isAdminLoading] = useAdmin()
//     const {user, loading} = useAuth()
//     const location = useLocation()
//     if (loading || isAdminLoading) {
//         return <span className="loading loading-spinner loading-lg mx-auto my-auto"></span>

//     }
//     if (user && !loading && isAdmin ) {
//         return children
//     }

//     return (
//         <Navigate state={location.pathname} to={"/login"}></Navigate>
//     );
// };

// export default AdminRoute;