import React from 'react';
import './QuizeCard.css'
import OptionCard from '../OptionCard/OptionCard';
import { Link } from 'react-router-dom';

const QuizeCard = ({question}) => {

    //The question as props destructuring:
        const { options, id} = question;

    // removing <p></p> tag from the question
        const unSplitedQuestion = question.question;
        const firstPTagRemoving = unSplitedQuestion.split("<p>");
        const pTagRemovedQuestion = firstPTagRemoving[1].split("</p>");

    // Managing question number:
        const seperatedQuestionNumberFromId = id.slice(-1);
        const questionNumber = +seperatedQuestionNumberFromId + 1;


    return (
        <div className='quize-card'>
            
            {/* The questions */}
                <h3>Quiz {questionNumber}: {pTagRemovedQuestion}</h3>

            {/* The options */}
                <div className='options-container'>
                    {options.map((option, idx)=> <OptionCard key={idx} option={option}></OptionCard>)}
                </div>
            
            {/* The Answer Icon */}
            <Link>See Ans →</Link>
        </div>
    );
};

export default QuizeCard;