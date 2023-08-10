import React from 'react';
import './Header.scss';
import { Col, Image, Row, Select } from 'antd';
import AvatarDefault from '../../../assets/img/avatardefault.jpg';
import Logo from '../../../assets/logo.svg';
import { ExpandAltOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../store';
import { setTheme } from '../../redux/auth.slice';
const Header = () => {
    const dispatch = useAppDispatch();

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
        dispatch(setTheme(value));
    };
    return (
        <Row align={'middle'}>
            <Col span={12}>
                <Row gutter={[10, 10]} className="header_logo">
                    <Col span={12}>
                        <div className="header-rule__logo">
                            <div className="logo_item-container">
                                <Image className="logo_item-header" src={Logo} preview={false}></Image>
                            </div>
                            <div className="slogan_header">
                                <p>Hurricane</p>
                                <span>Hurls you to new heights</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col className="middle_content" span={12}>
                <Row style={{ display: 'flex', alignItems: 'center' }} gutter={[12, 12]} justify={'end'}>
                    <Col style={{ marginRight: '12px' }}>
                        <Select
                            defaultValue="light"
                            style={{ width: 120, color: '#035397' }}
                            onChange={handleChange}
                            options={[
                                { value: 'dark', label: 'Dark' },
                                { value: 'light', label: 'Light' },
                            ]}
                        />
                    </Col>
                    <Col style={{ marginRight: '12px' }}>
                        <Select
                            defaultValue="en"
                            style={{ width: 120, color: '#035397' }}
                            onChange={handleChange}
                            options={[
                                { value: 'en', label: 'English' },
                                { value: 'vn', label: 'Vietnamese' },
                                { value: 'japan', label: 'Japanese' },
                                { value: 'china', label: 'China', disabled: true },
                            ]}
                        />
                    </Col>

                    <Col>
                        <div className="middle-image_user">
                            <Image className="image_user" src={AvatarDefault} preview={false}></Image>
                        </div>
                    </Col>
                    <Col>
                        <div className="midle_position">
                            <p className="-mt-3 font-semibold text-sm">User name</p>
                            <span className="midle-sub_position">Position</span>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Header;
