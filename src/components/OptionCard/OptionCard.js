import React from 'react';
import './OptionCard.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OptionCard = ({datas}) => {
    const notify = ({answerData}) => {
        const {theFeedBackForRight, theFeedBackForWrong, optionData} = answerData ;
        toast.success(`Well done! You did it. The answer '${optionData}' is correct `, {
            position: "top-center"
        })
    }


    // destructure the datas
    const [option, correctAnswer, id] = datas;


    // use the datas to handleAnswerProvidingClickOnOption code
    const handleAnswerProvidingClickOnOption = ({optionData}) => {
        
        // Checking the answer right or wrong:
        if ( optionData === correctAnswer) {
            console.log("Ok");
            notify(correctAnswer)
        }
        else {
            const theFeedBack = `Sorry. You made a mistake. The answer ${optionData} is wrong. Please study more`
            notify(theFeedBack, optionData)

        }
    }

    return (
        <div className='option-card' onClick={() => handleAnswerProvidingClickOnOption({optionData:option})}>
            <h6>{option}</h6>
        </div>
    );
};

export default OptionCard;