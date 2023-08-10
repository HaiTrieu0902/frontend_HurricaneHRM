import { Layout as AntLayout } from 'antd';
import React, { useState } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import { useAppSelector } from '../store';
interface LayoutProps {
    children: React.ReactNode;
}
const { Header: AntHeader, Content, Sider } = AntLayout;
const Layout = ({ children }: LayoutProps) => {
    const { theme } = useAppSelector((state) => state.auth);
    const [collapsed, setCollapsed] = useState(false);
    return (
        <AntLayout className="layout_container" hasSider>
            <AntHeader className="layout_header">
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
                <Content className="layout_content">{children}</Content>
            </AntLayout>
        </AntLayout>
    );
};

export default Layout;
