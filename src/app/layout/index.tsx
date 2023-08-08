import { Layout as AntLayout } from 'antd';
import React, { useState } from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
interface LayoutProps {
    children: React.ReactNode;
}

const { Header: AntHeader, Content, Sider } = AntLayout;

const Layout = ({ children }: LayoutProps) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <AntLayout className="layout_container" hasSider>
            <AntHeader className="layout_header">
                <Header />
            </AntHeader>
            <AntLayout className="layout_subcontain">
                <Sider
                    style={{ backgroundColor: 'white' }}
                    className="layout_sider"
                    width={260}
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
