import React from 'react';
import './OptionCard.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OptionCard = ({datas}) => {
    
    // destructure the datas
    const [option, correctAnswer,] = datas;



     // notify about the right answer using react toastify.
     const customId = "custom-id-yes";

    const notifyRight = (answerData) => {
        toast.success(`Well done! You did it. The answer '${answerData}' is correct `, {
            className: 'right-answer',
            position: "bottom-right",
            customId: customId,
            autoClose: 2000
        })
    }

    // notify about the wrong answer using react toastify.
    const notifyWrong = (wrongAnswerData) => {
        toast.error(`Sorry. You've made a mistake. The answer '${wrongAnswerData}' is wrong. You should study more`, {
            className: 'wrong-answer',
            position: "bottom-left",
            customId: customId,
        })
    }

    // use the datas to handleAnswerProvidingClickOnOption code
    const handleAnswerProvidingClickOnOption = ({optionData}) => {
        
        // Checking the answer right or wrong:
        if ( optionData === correctAnswer) {
            notifyRight(correctAnswer)
            
        }
        else {
            // const theFeedBack = `Sorry. You made a mistake. The answer ${optionData} is wrong. Please study more`;
            notifyWrong(optionData)

        }
    }

    return (
        <div className='option-card' onClick={() => handleAnswerProvidingClickOnOption({optionData:option})}>
            <h6>{option}</h6>
        </div>
    );
};

export default OptionCard;