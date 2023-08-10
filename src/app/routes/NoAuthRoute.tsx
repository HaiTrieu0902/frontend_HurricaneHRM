import Cookies from 'js-cookie';
import { Navigate, Outlet } from 'react-router-dom';
import { ACCESS_TOKEN_KEY } from '../constants';

const NoAuthRoute = () => {
    const authToken = Cookies.get(ACCESS_TOKEN_KEY);

    return !authToken ? <Outlet /> : <Navigate to={'/home'} replace />;
};

export default NoAuthRoute;
