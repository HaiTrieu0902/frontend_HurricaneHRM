import React from 'react';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
    return (
        <>
            <Helmet>
                <title>404 Page Not Found</title>
                <meta name="Hurricane" content="Page not found" />
            </Helmet>
            <div>Page Not Found</div>
        </>
    );
};

export default NotFoundPage;
