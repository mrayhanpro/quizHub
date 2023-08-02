import React from 'react';
import './OptionCard.css'

const OptionCard = ({option}) => {
    return (
        <div className='option-card'>
            {/* <div className='tick-div'>
                <h5>X</h5>
            </div> */}
            <li>{option}</li>
        </div>
    );
};

export default OptionCard;