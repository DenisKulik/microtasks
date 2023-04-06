import { useState } from 'react';

type MoneyType = 'All' | 'Dollar' | 'Ruble';

const arrMoney = [
    { banknote: 'Dollar', value: 100, number: ' a1234567890' },
    { banknote: 'Dollar', value: 50, number: ' z1234567890' },
    { banknote: 'Ruble', value: 100, number: ' w1234567890' },
    { banknote: 'Dollar', value: 100, number: ' e1234567890' },
    { banknote: 'Dollar', value: 50, number: ' c1234567890' },
    { banknote: 'Ruble', value: 100, number: ' r1234567890' },
    { banknote: 'Dollar', value: 50, number: ' x1234567890' },
    { banknote: 'Ruble', value: 50, number: ' v1234567890' },
];


const Money = () => {
    const [ money, setMoney ] = useState(arrMoney);

    const filterMoney = (moneyType: MoneyType) => {
        const currentMoney = moneyType !== 'All' ? arrMoney.filter(
            (item) => item.banknote === moneyType) : arrMoney;
        setMoney(currentMoney);
    };

    return (
        <>
            <ul>
                {money.map((item, idx) => (
                    <li key={idx}>
                        <span>{item.banknote} </span>
                        <span>{item.value} </span>
                        <span>{item.number} </span>
                    </li>
                ))}
            </ul>
            <button onClick={() => filterMoney('All')}>All</button>
            <button onClick={() => filterMoney('Ruble')}>Ruble</button>
            <button onClick={() => filterMoney('Dollar')}>Dollar</button>
        </>
    );
};

export default Money;