import React from 'react';
import LoginForm from '../../auth/loginForm/LoginForm';

const LoginPage = () => {
    return (
        <div style={{ height: '100vh' }} className="flex mx-auto items-center justify-center bg-[#fafafa]">
            <LoginForm />
            {/* {contextHolder} */}
        </div>
    );
};

export default LoginPage;
