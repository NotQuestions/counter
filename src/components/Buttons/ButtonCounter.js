import React from "react";
import './ButtonCounterStyle.scss';

 function ButtonCounter(props){


     const {label,number}= props;
     const onOptionSelect = ()=>{
         const {clickButton} = props;
        clickButton(number);

     }
        return (
            <button className={'buttonCount'} onClick={onOptionSelect}>{label}</button>
        );
}
export default ButtonCounter;
