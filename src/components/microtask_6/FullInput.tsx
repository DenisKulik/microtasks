import { ChangeEvent, useState } from 'react';

type FullInputType = {
    addMessage: (title: string) => void
}

const FullInput = ({ addMessage }: FullInputType) => {
    const [ title, setTitle ] = useState('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    const onClickButtonHandler = () => {
        addMessage(title);
        setTitle('');
    };

    return (
        <div>
            <input onChange={ onChangeInputHandler } value={ title } />
            <button onClick={ onClickButtonHandler }>+</button>
        </div>
    );
};

export default FullInput;