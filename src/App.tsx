import './App.css';
import Header from './components/microtask_4/Header';
import Body from './components/microtask_1/Body';
import Button from './components/microtask_3/Button';
import Money from './components/microtask_5/Money';
import Messages from './components/microtask_6/Messages';

function App() {
    const BtnFoo = (sub: string, age: number): void => {
        console.log(`I'm ${ sub }, ${ age }`);
    };

    return (
        <div className="App">
            <Header title={ 'New Header' } />
            <Body titleForBody={ 'New Body' } />
            <Button name={ 'Sub2' } callback={ () => BtnFoo('Anya', 23) } />
            <Money />
            <Messages />
        </div>
    );
}

export default App;
