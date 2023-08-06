import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from '../config';
import NoAuthRoute from './NoAuthRoute';
import PrivateRoutes from './PrivateRoute';
const LoginPage = lazy(() => import('../models/page/loginPage/LoginPage'));
const ForgotPage = lazy(() => import('../models/page/forgotPage/ForgotPage'));
const NotFoundPage = lazy(() => import('../models/page/notFoundPage/NotFoundPage'));

export const RoutesConfig = () => {
    return (
        <>
            <Suspense fallback={<div>Loading.....</div>}>
                <Routes>
                    <Route element={<NoAuthRoute />}>
                        {/* <Route path={ROUTES.home} Component={HomePage} />
                        <Route path={ROUTES.dashbroad} Component={DashBroadPage} />
                        <Route path={ROUTES.release} Component={RelasePage} /> */}
                    </Route>
                    <Route element={<PrivateRoutes />}>
                        {/* <Route path={ROUTES.login} Component={LoginPage} /> */}
                    </Route>
                    <Route path={ROUTES.homepage} Component={LoginPage} />
                    <Route path={ROUTES.forgot} Component={ForgotPage} />
                    <Route path={ROUTES.notfoundPage} Component={NotFoundPage} />
                </Routes>
            </Suspense>
        </>
    );
};
