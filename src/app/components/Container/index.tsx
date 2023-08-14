import React, { Children } from 'react';
import './ContainerLayout.scss';
import { Layout } from 'antd';

interface ContainerLayoutProps {
    className?: string;
    width?: string;
    height?: string;
    data?: any;
    children: React.ReactNode;
}

const ContainerLayout = ({ className, width, height, data, children }: ContainerLayoutProps) => {
    return (
        <Layout
            className={`container-layout_main ${className}`}
            style={{ width: width, height: height, backgroundColor: '#fafafa' }}
        >
            {children}
        </Layout>
    );
};

export default ContainerLayout;
