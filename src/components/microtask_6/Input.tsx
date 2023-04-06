import React, { ChangeEvent } from 'react';

type InputType = {
    title: string
    setTitle: (title: string) => void
}

const Input = ({ title, setTitle }: InputType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    return (
        <input onChange={ onChangeInputHandler } value={ title } />
    );
};

export default Input;