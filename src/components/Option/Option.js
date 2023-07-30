import React from 'react';
import './Option.css'

const Option = ({option}) => {
console.log(option);
    return (
        <div className='option-card'>
            <div>
                <h5>Tick Mark</h5>
            </div>
            <p>
                {option}
            </p>
        </div>
    );
};

export default Option;