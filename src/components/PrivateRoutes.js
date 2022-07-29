import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
    const IsAuth = sessionStorage.getItem('AuthToken');
    return (
        (IsAuth === null) ? <Navigate to="/" /> : <Outlet/> 
    );
}

export default PrivateRoutes;