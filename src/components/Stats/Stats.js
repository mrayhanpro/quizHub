import React from 'react';
import './Stats.css'

const Stats = ({countRightAnswer, countWrongAnswer}) => {
    return (
        <div id='stats' className='stats'>
            <h1>Stats:</h1>
            <div id='total-correct-answer-container'className='state-container'>
                <h3>Total correct answer:</h3>
                <p className='total-correct-answer-number number-container'>{countRightAnswer}</p>
           </div>

           <div id='total-incorrect-answer-container' className='state-container'>
                <h3>Total incorrect answer:</h3>
                <p className='total-incorrect-answer-number number-container'>{countWrongAnswer}</p>
           </div>
           
        </div>
    );  
};  

export default Stats;