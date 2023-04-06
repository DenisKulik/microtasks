import { useState } from 'react';
import Input from './Input';
import ButtonAdd from './ButtonAdd';

const Messages = () => {
    const [ message, setMessage ] = useState([
            { message: 'message1' },
            { message: 'message2' },
            { message: 'message3' },
            { message: 'message4' },
            { message: 'message5' }
        ]
    );

    const [ title, setTitle ] = useState('');


    const addMessage = (title: string): void => {
        setMessage([ { message: title }, ...message ]);
    };

    const buttonHandler = () => {
        addMessage(title);
        setTitle('');
    };

    return (
        <div className="App">
            <Input setTitle={ setTitle } title={ title } />
            <ButtonAdd name={ '+' } callback={ buttonHandler } />
            { message.map((el, index) => {
                return (
                    <div key={ index }>{ el.message }</div>
                );
            }) }
        </div>
    );
};

export default Messages;