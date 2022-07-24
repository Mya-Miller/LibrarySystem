import { Outlet, Navigate } from 'react-router-dom';
import { app } from '../firebase';

function PrivateRoutes() {
    let auth = app.IsAuth;
    return (
        auth ? <Outlet/> : <Navigate to="/" />
    );
}

export default PrivateRoutes;