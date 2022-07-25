import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
    const IsAuth = sessionStorage.getItem('AuthToken');
    return (
        IsAuth ? <Outlet/> : <Navigate to="/" />
    );
}

export default PrivateRoutes;