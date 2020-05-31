import React, {useState} from 'react';
import './App.css';
import ButtonCounter from '../Buttons/ButtonCounter.js';
import InputCounter from "../Input/InputCounter";
import DisplayCounter from "../Display/DisplayCounter";

function App() {
    const [count, setCount] = useState(0);
    const clickButton = (number) => {
        count + number >= 0 ? setCount(count + number) : setCount(count);
    }
    const resetCount = () => {
        setCount(0);
    }

    return (
        <div className="App">
            <ButtonCounter label={'-1'} number={-1} clickButton={clickButton}/>
            <ButtonCounter label={'+1'} number={1} clickButton={clickButton}/>
            <ButtonCounter label={'-100'} number={-100} clickButton={clickButton}/>
            <ButtonCounter label={'+100'} number={100} clickButton={clickButton}/>
            <ButtonCounter label={'Reset'} clickButton={resetCount}/>
            <DisplayCounter count={count}/>
            <InputCounter clickEnter={clickButton}/>
        </div>
    );
}

export default App;
