import { Navigate, Outlet } from 'react-router-dom';
import { ACCESS_TOKEN_KEY } from '../constants';
import Cookies from 'js-cookie';
const PrivateRoutes = () => {
    const authToken = Cookies.get(ACCESS_TOKEN_KEY);
    return authToken ? <Outlet /> : <Navigate to={'/login'} replace />;
};

export default PrivateRoutes;
