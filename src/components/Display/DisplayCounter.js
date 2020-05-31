import React, {useState} from 'react';
import './DiaplayCounter.scss'
function DisplayCounter(props) {
        const {count}=props;
        return (
            <div className={'display'} >
            <div className={'display-numbers'}>
                {count}
            </div>
            </div>
        );
}

export default DisplayCounter;