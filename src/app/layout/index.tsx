import React, { useState } from 'react';
import { Layout as AntLayout, Menu, MenuProps } from 'antd';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import Header from './header/Header';
interface LayoutProps {
    children: React.ReactNode;
}

const { Header: AntHeader, Content, Footer, Sider } = AntLayout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Layout = ({ children }: LayoutProps) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <AntLayout className="layout_container" hasSider>
            <AntHeader className="layout_header">
                <Header />
            </AntHeader>
            <AntLayout className="layout_subcontain">
                <Sider
                    className="layout_sider"
                    width={250}
                    collapsible
                    collapsed={collapsed}
                    onCollapse={(value) => setCollapsed(value)}
                >
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
                </Sider>
                <Content className="layout_content">{children}</Content>
            </AntLayout>
        </AntLayout>
    );
};

export default Layout;
