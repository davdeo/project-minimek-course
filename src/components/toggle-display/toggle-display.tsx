import React from 'react';

interface Props {
    isShown: boolean;
}

export const ToggleDisplay: React.FunctionComponent<Props> = ({ isShown, children }) => {
    const style = { display: isShown ? undefined : 'none' } as React.CSSProperties;

    return <span style={style}>{children}</span>;
};
