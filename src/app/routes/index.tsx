import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../config';
import NoAuthRoute from './NoAuthRoute';
import PrivateRoutes from './PrivateRoute';

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
                    {/* <Route path={ROUTES.mainpage} Component={LoginPage} /> */}
                </Routes>
            </Suspense>
        </>
    );
};
