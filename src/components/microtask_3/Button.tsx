import React from 'react';

type ButtonType = {
    name: string
    callback: () => void
}

const Button = ({ name, callback }: ButtonType) => {
    return (
        <button onClick={callback}>{name}</button>
    );
};

export default Button;