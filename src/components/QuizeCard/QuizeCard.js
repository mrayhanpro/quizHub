import React from 'react';
import './QuizeCard.css'
import Option from '../Option/Option';

const QuizeCard = ({question}) => {
    const { options} = question;
    // console.log(question);
    console.log(options);
    return (
        <div className='quize-card'>
            <h1>This is the quize</h1>
            <div className='options-container'>
                {options.map(option => <Option option={option}></Option>)}
            </div>
        </div>
    );
};

export default QuizeCard;