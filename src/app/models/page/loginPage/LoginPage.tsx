import { IParamLogin } from '../../../types/auth.type';
import LoginForm from '../../auth/loginForm/LoginForm';
const LoginPage = () => {
    // const dispatch = useAppDispatch();
    // const navigate = useNavigate();
    // const messageApi: any = useContext(MessageContext);
    const onLogin = async (value: IParamLogin) => {
        // try {
        //     const res = await axios.post(`${API_PATHS.API}/${API_PATHS.signIn}`, {
        //         account: value.account,
        //         password: value.password,
        //     });
        //     if (res.status === 200) {
        //         Cookies.set(ACCESS_TOKEN_KEY, res.data.token);
        //         localStorage.setItem('accessToken', res.data.token);
        //         dispatch(getAccessToken(res.data.token));
        //         dispatch(getUserAuth(res.data.user));
        //         navigate(ROUTES.home);
        //     }
        //     messageApi.success('Login SuccessFullly');
        // } catch (error) {
        //     messageApi.error('Your UserID and Password combination do not match. Please retry again.');
        // }

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
