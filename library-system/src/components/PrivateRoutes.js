import { Outlet, Navigate } from 'react-router-dom';

function PrivateRoutes() {
    let auth = true;
    return (
        auth ? <Outlet/> : <Navigate to="/" />
    );
}

export default PrivateRoutes;