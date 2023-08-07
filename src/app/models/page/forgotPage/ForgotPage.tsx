import ForgotPassword from '../../auth/forgotPassword/ForgotPassword';
const ForgotPage = () => {
    return (
        <div style={{ height: '100vh' }} className="flex mx-auto items-center justify-center bg-[#fafafa]">
            <ForgotPassword />
            {/* {contextHolder} */}
        </div>
    );
};

export default ForgotPage;
