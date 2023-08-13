import { Layout as AntLayout } from 'antd';
import React, { useMemo, useState } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { useAppSelector } from '../store';
import { RoutesConfig } from '../routes';
import { useLocation } from 'react-router-dom';
interface LayoutProps {
    children?: any;
}
const { Header: AntHeader, Content, Sider } = AntLayout;
const LayoutMain = ({ children }: LayoutProps) => {
    let { pathname } = useLocation();
    pathname = pathname.replace('/', '');
    const { theme } = useAppSelector((state) => state.auth);
    const [collapsed, setCollapsed] = useState(false);

    const handleDetermineRouter = useMemo(() => {
        if (pathname === 'login' || pathname === 'forgot-password' || pathname === '') {
            return true;
        }
        return false;
    }, [pathname]);

    return !handleDetermineRouter ? (
        <AntLayout className="layout_container" hasSider>
            <AntHeader className="layout_header ">
                <Header />
            </AntHeader>
            <AntLayout className="layout_subcontain">
                <Sider
                    className={`layout_sider ${theme === 'light' ? 'layout_bg_light' : 'layout_bg_dark'}`}
                    width={250}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                >
                    <Sidebar />
                </Sider>
                <Content className="layout_content">
                    <div style={{ backgroundColor: '#fafafa' }}>
                        <RoutesConfig />
                    </div>
                </Content>
            </AntLayout>
        </AntLayout>
    ) : (
        <AntLayout>
            <div style={{ backgroundColor: '#fafafa' }}>
                <RoutesConfig />
            </div>
        </AntLayout>
    );
};

export default LayoutMain;
