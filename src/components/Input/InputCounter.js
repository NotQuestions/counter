import React, {useState} from 'react';
import './InputCounterStyle.scss'

function InputCounter(props) {
    const [value, setValue] = useState('');
    const {clickEnter} = props;

    const handlerChange = (event) => {
        setValue(event.target.value);
    }

    function submitHandler(event) {
        event.preventDefault();
        clickEnter(Number(value));
        setValue('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="number" placeholder={'Enter number'} value={value} className={"input-counter"}
                   onChange={handlerChange}/>
            <button className={'buttonCount'} type={'submit'}>Enter</button>
        </form>
    );
}

export default InputCounter;