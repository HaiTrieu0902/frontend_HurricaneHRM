import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store';
import { IParamLogin } from '../../../types/auth.type';
import LoginForm from '../../auth/loginForm/LoginForm';
import { loginAuthAPI } from '../../../redux/auth.slice';
const LoginPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { authUser } = useAppSelector((state) => state.auth);
    // const messageApi: any = useContext(MessageContext);
    const onLogin = async (value: IParamLogin) => {
        try {
            dispatch(loginAuthAPI(value));
        } catch (error) {
            console.log(error);
        }

        console.log('value', value);
    };

    return (
        <div style={{ height: '100vh' }} className="flex mx-auto items-center justify-center bg-[#fafafa]">
            <LoginForm onLogin={onLogin} />
            {/* {contextHolder} */}
        </div>
    );
};

export default LoginPage;
