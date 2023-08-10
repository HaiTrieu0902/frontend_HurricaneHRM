import React from 'react';
import './Sidebar.scss';
import {
    ScheduleOutlined,
    FileTextOutlined,
    DollarOutlined,
    UserSwitchOutlined,
    UsergroupAddOutlined,
    DeploymentUnitOutlined,
    GlobalOutlined,
    SecurityScanOutlined,
    SettingOutlined,
    PieChartOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { SET_COLOR_ICON_DARK, SET_COLOR_ICON_LIGHT, SET_SIZE_ICON } from '../../constants';
import { useAppSelector } from '../../store';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const Sidebar = () => {
    const { theme } = useAppSelector((state) => state.auth);
    const SET_COLOR_SIDEBAR = theme === 'light' ? SET_COLOR_ICON_LIGHT : SET_COLOR_ICON_DARK;

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };
    const items: MenuItem[] = [
        getItem(
            'General',
            'general',
            null,
            [
                getItem(
                    'Attendace Manage',
                    'attendace',
                    <ScheduleOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),
                getItem(
                    'Leave Manage',
                    'leave',
                    <FileTextOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),
                getItem(
                    'Payroll Manage',
                    'payroll',
                    <DollarOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),
                getItem(
                    'Employee Manage',
                    'employee',
                    <UsergroupAddOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),

                getItem(
                    'User Manage',
                    'user',
                    <UserSwitchOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),
                getItem(
                    'Master Manage',
                    'master',
                    <DeploymentUnitOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                    [
                        getItem('Employee Grading', 'master_grading', null),
                        getItem('Benefit Setup', 'master_benefit', null),
                        getItem('Leave Setup', 'master_leave', null),
                        getItem('Department', 'master_department', null),
                        getItem('Position', 'master_position', null),
                        getItem('Marriage Status', 'master_marriage', null),
                    ],
                ),
            ],
            'group',
        ),
        getItem(
            'Advance',
            'advance',
            null,
            [
                getItem(
                    'Global Settings',
                    'global-settings',
                    <GlobalOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),
                getItem(
                    'Security',
                    'security',
                    <SecurityScanOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),
                getItem(
                    'Settings',
                    'settings',
                    <SettingOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),
            ],
            'group',
        ),

        getItem(
            'Statistics',
            'statistics',
            null,
            [
                getItem(
                    'Pie',
                    'pie',
                    <PieChartOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),
                getItem(
                    'Chart',
                    'chart',
                    <BarChartOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_SIDEBAR }} />,
                ),
            ],
            'group',
        ),
    ];
    return (
        <div style={{ marginTop: 12 }}>
            <Menu
                onClick={onClick}
                className={`menu_option-sidebar ${theme === 'dark' && 'menu_option_dark'}`}
                theme={theme}
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                items={items}
            />
        </div>
    );
};

export default Sidebar;
