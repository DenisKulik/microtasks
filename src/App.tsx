import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Button from './components/Button';
import Money from './components/Money';

function App() {
    const BtnFoo = (sub: string, age: number): void => {
        console.log(`I'm ${sub}, ${age}`);
    };

    const Btn2Foo = (): void => {
        console.log('I\'m stupid button');
    };

    return (
        <div className="App">
            <Header title={'New Header'} />
            <Body titleForBody={'New Body'} />
            <Button name={'Sub1'} callback={() => BtnFoo('Denis', 26)} />
            <Button name={'Sub2'} callback={() => BtnFoo('Anya', 23)} />
            <Button name={'Stupid button'} callback={Btn2Foo} />
            <Money />
        </div>
    );
}

export default App;
