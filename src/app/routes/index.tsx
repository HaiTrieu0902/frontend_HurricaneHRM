import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ROUTES } from '../config';
import NoAuthRoute from './NoAuthRoute';
import PrivateRoutes from './PrivateRoute';

const LoginPage = lazy(() => import('../models/page/loginPage/LoginPage'));
const ForgotPage = lazy(() => import('../models/page/forgotPage/ForgotPage'));
const NotFoundPage = lazy(() => import('../models/page/notFoundPage/NotFoundPage'));
const HomePage = lazy(() => import('../pages/Home'));
const EmployeePage = lazy(() => import('../pages/Employee'));
const UserPage = lazy(() => import('../pages/User'));
export const RoutesConfig = () => {
    return (
        <>
            <Suspense fallback={<div>Loading.....</div>}>
                <Routes>
                    <Route element={<NoAuthRoute />}>
                        <Route path={ROUTES.homepage} Component={LoginPage} />
                        <Route path={ROUTES.login} Component={LoginPage} />
                        <Route path={ROUTES.forgot} Component={ForgotPage} />
                    </Route>
                    <Route element={<PrivateRoutes />}>
                        <Route path={ROUTES.home} Component={HomePage} />
                        <Route path={ROUTES.employee} Component={EmployeePage} />
                        <Route path={ROUTES.user} Component={UserPage} />
                    </Route>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path={ROUTES.notfoundPage} Component={NotFoundPage} />
                </Routes>
            </Suspense>
        </>
    );
};
