import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = (children, ...rest) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // return (     
    //     loggedInUser.email ? <Outlet/> : <Navigate to="/login" replace> </Navigate>  
    // );
    if(!loggedInUser.email){
        return <Navigate to="/login" replace></Navigate>
    }
    return <Outlet/>;
    
};

export default PrivateRoute;