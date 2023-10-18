import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import './QuizeCard.css'
import OptionCard from '../OptionCard/OptionCard';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizeCard = ({question, handleRightAnswerClick, handleWrongAnswerClick}) => {

    //The question as props destructuring:
        const { options, id, correctAnswer} = question;

    // removing <p></p> tag from the question
        const unSplitedQuestion = question.question;
        const firstPTagRemoving = unSplitedQuestion.split("<p>");
        const pTagRemovedQuestion = firstPTagRemoving[1].split("</p>");

    // Managing question number:
        const seperatedQuestionNumberFromId = id.slice(-1);
        const questionNumber = +seperatedQuestionNumberFromId + 1;

    // handleSeeAnswerIconClick code.
        const toastId = React.useRef(null);
        const notify = (data) => {
            if(! toast.isActive(toastId.current)){
                toastId.current = toast.success(data, {
                    autoClose: 2000,
                    position: 'bottom-right',               
                });
            }
        };

        const handleSeeAnswerIconClick = () => {
            notify(`The answer is => "${question.correctAnswer}" <=`, {
                icon: false
            })
        }

    return (
        <div className='quize-card' >
            <ToastContainer></ToastContainer>
            {/* The questions */}
                <h3>Quiz {questionNumber}: {pTagRemovedQuestion}</h3>

            {/* The options */}
                <div className='options-container'>
                    {options.map((option, idx)=> <OptionCard
                        key={idx} datas={[option, correctAnswer, id]} handleRightAnswerClick={handleRightAnswerClick}
                        handleWrongAnswerClick={handleWrongAnswerClick}
                    ></OptionCard>)}
                </div>
            
            {/* The Answer Icon */}
            <Link onClick={handleSeeAnswerIconClick}><FontAwesomeIcon icon={faEye} /></Link>
        </div>
    );
};

export default QuizeCard;