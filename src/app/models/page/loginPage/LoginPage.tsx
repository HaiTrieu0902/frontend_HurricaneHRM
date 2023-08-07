import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { MessageContext } from '../../..';
import { getAccessToken, loginAuthAPI } from '../../../redux/auth.slice';
import { useAppDispatch } from '../../../store';
import { IParamLogin } from '../../../types/auth.type';
import LoginForm from '../../auth/loginForm/LoginForm';
import { ROUTES } from '../../../config';
const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const messageApi: any = useContext(MessageContext);
    const onLogin = async (value: IParamLogin) => {
        try {
            const res: any = await dispatch(loginAuthAPI(value));
            if (res.payload?.status === 200) {
                dispatch(getAccessToken(res.payload?.data?.token));
                messageApi.success(`${res.payload?.message}`);
                navigate(ROUTES.home);
            } else {
                messageApi.error(`${res?.error?.message}`);
            }
        } catch (error) {
            messageApi.error(`${error}`);
        }
    };
    return (
        <div style={{ height: '100vh' }} className="flex mx-auto items-center justify-center bg-[#fafafa]">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm onLogin={onLogin} />
        </div>
    );
};

export default LoginPage;
