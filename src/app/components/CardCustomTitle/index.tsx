import { Card } from 'antd';
import React from 'react';
import './CardCustomTitle.scss';

interface CardNotTitleProps {
    children: React.ReactNode;
    height?: number;
    width?: string;
    extra?: React.ReactNode;
    title?: string;
    size?: 'default' | 'small';
    className?: string;
}

const CardCustomTitle = ({ children, height, width, extra, title, size, className }: CardNotTitleProps) => {
    return (
        <Card className={className} title={title} size={size} style={{ height: height, width: width }} extra={extra}>
            {children}
        </Card>
    );
};

export default CardCustomTitle;
