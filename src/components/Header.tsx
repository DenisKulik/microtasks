import React, { useState } from 'react';

type HeaderType = {
    title: string
}

const Header = ({ title }: HeaderType) => {
    let [ num, setNum ] = useState(0);

    const handlerClickMinus = () => {
        setNum(--num);
    };

    const handlerClickPlus = () => {
        setNum(++num);
    };

    return (
        <div>
            <h1>{title}</h1>
            <h2>counter</h2>
            <p>{num}</p>
            <button onClick={handlerClickMinus}>-</button>
            <button onClick={handlerClickPlus}>+</button>
        </div>
    );
};

export default Header;