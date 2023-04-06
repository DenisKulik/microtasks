import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Button from './components/Button';
import Money from './components/Money';
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
