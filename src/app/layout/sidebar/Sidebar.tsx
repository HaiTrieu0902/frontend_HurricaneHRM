import React from 'react';
import './Sidebar.scss';
import { ScheduleOutlined, FileTextOutlined, DollarOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { SET_COLOR_ICON_LIGHT, SET_SIZE_ICON } from '../../constants';

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

const items: MenuItem[] = [
    getItem(
        'General',
        'general',
        null,
        [
            getItem(
                'Attendace Manage',
                'attendace',
                <ScheduleOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
            ),
            getItem(
                'Leave Manage',
                'leave',
                <FileTextOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
            ),
            getItem(
                'Payroll Manage',
                'payroll',
                <DollarOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
            ),
            getItem(
                'Employee Manage',
                'employee',
                <UserOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
            ),
            getItem(
                'User Manage',
                'user',
                <ScheduleOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
            ),
            getItem(
                'Master Manage',
                'master',
                <ScheduleOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
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
                <ScheduleOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
            ),
            getItem(
                'Security',
                'security',
                <ScheduleOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
            ),
            getItem(
                'Settings',
                'settings',
                <ScheduleOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
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
                <ScheduleOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
            ),
            getItem(
                'Chart',
                'chart',
                <ScheduleOutlined style={{ fontSize: SET_SIZE_ICON, color: SET_COLOR_ICON_LIGHT }} />,
            ),
        ],
        'group',
    ),

    // getItem('User', 'sub1', <UserOutlined />,[] [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
    // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
];
const Sidebar = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <div style={{ marginTop: 12 }}>
            <Menu
                onClick={onClick}
                className="menu_option-sidebar"
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                items={items}
            />
        </div>
    );
};

export default Sidebar;
