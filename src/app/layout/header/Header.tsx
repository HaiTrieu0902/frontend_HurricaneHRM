import React from 'react';
import './Header.scss';
import { Col, Image, Row } from 'antd';
import Logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <Row align={'middle'}>
            <Col span={12}>
                <Row gutter={[10, 10]} className="header_logo">
                    <Col span={12}>
                        <div className="header-rule__logo">
                            <Image className="logo_item-header" src={Logo} preview={false}></Image>
                            <div className="slogan_header">
                                <p>Hurricane</p>
                                <span>Hurls you to new heights</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col className="middle_content" span={12}>
                <Row justify={'end'}>
                    <Col>
                        <div>hhii</div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Header;
