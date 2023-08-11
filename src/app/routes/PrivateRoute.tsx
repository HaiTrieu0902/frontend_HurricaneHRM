import { Navigate, Outlet } from 'react-router-dom';
import { ACCESS_TOKEN_KEY } from '../constants';
import Cookies from 'js-cookie';
import { Route } from 'react-router-dom';
interface PrivateRouteProps {
    Component: React.ComponentType<any>;
    path: string;
}
//{ Component: Component, ...rest }: PrivateRouteProps
const PrivateRoutes = () => {
    const authToken = Cookies.get(ACCESS_TOKEN_KEY);
    return authToken ? <Outlet /> : <Navigate to={'/login'} replace />;
    // return <Route {...rest} element={authToken ? <Component /> : <Navigate to={'/login'} replace />} />;
};

export default PrivateRoutes;
