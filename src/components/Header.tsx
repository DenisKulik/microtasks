import React from 'react';

type HeaderType = {
    title: string
}

const Header = ({ title }: HeaderType) => {
    return (
        <div>{title}</div>
    );
};

export default Header;