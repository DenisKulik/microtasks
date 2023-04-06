import React from 'react';

type ButtonAddType = {
    name: string
    callback: () => void
}

const ButtonAdd = ({ name, callback }: ButtonAddType) => {
    const onClickButtonHandler = () => {
        callback();
    };

    return (
        <button onClick={ onClickButtonHandler }>{ name }</button>
    );
};

export default ButtonAdd;