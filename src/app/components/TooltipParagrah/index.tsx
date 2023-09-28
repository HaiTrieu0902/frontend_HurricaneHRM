import { Tooltip } from 'antd';
import React, { useState } from 'react';

const TooltipParagraph: React.FC<any> = ({
    color,
    textAlign,
    className,
    width,
    placement,
    children,
    ellipsis,
    ...props
}) => {
    const [truncated, setTruncated] = useState(false);
    return (
        <Tooltip placement={placement} title={children}>
            <span style={{ width: width ? width : '100%', color: color, textAlign: textAlign }} className={className}>
                <>{children}</>
            </span>
        </Tooltip>
    );
};

export default TooltipParagraph;
