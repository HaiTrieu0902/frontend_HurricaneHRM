import { Button, Form, Image, Input } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.svg';
import { ROUTES } from '../../../config';
import './ForgotPassword.scss';
const ForgotPassword = () => {
    const isGmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const validateEmail = (rule: any, value: any, callback: any) => {
        if (!value) {
            callback('Please enter email information');
        } else if (!isGmail(value)) {
            callback('Please enter a valid Gmail address');
        } else if (value.length > 100) {
            callback('Email cannot exceed 100 characters');
        } else {
            callback();
        }
    };

    return (
        <div className="bg-white forgot-form-content rounded-[32px]">
            <div className="flex items-center flex-col p-4">
                <div className="w-full col_imgHeader">
                    <Image src={logo} className="img_header" preview={false} width={150} />
                    <div className="slogan_header">
                        <p>Hurricane</p>
                        <span>Hurls you to new heights</span>
                    </div>
                </div>
                <div className="flex flex-col w-[67%] items-center">
                    <h1 className="text-title">Forgot Password</h1>
                    <span className="text-sm text-[#00000073] mb-8 text-center -mt-1">
                        Please enter your email details to get password.
                    </span>
                    <Form
                        // onFinish={onFinish}
                        layout="vertical"
                        className="ant-form-container w-full"
                        id="ant-form_login"
                    >
                        <Form.Item
                            name="email"
                            label="Email"
                            className="label-input"
                            rules={[
                                {
                                    required: true,
                                    validator: validateEmail,
                                },
                            ]}
                        >
                            <Input id="login_account" placeholder="Enter your email" className="ant-input_login" />
                        </Form.Item>
                        <div className="flex justify-between">
                            <div></div>
                            <Button type="link">
                                <Link to={ROUTES.login} className="text_forgot">
                                    Back to Login
                                </Link>
                            </Button>
                        </div>

                        <Form.Item>
                            <Button
                                className="w-full mt-6 rounded-xl h-[51px] text-lg font-semibold text-white text-family button-primary"
                                type="primary"
                                htmlType="submit"
                            >
                                Confirm & Sen OTP
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <span className="text-base text-copyright">
                    © Hurricane {new Date().getFullYear()}. All Rights Reserved
                </span>
            </div>
        </div>
    );
};

export default ForgotPassword;
