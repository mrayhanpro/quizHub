import React, { useState } from 'react';
import './Quizes.css'
import { useLoaderData } from 'react-router-dom';
import QuizeCard from '../QuizeCard/QuizeCard';
import Stats from '../Stats/Stats';


const Quizes = () => {
    // declaretion some of varibles and states:
    const [countRightAnswer, setCountRightAnswer] = useState(0);
    const [countWrongAnswer, setCountWrongAnswer] = useState(0)

    // receive and destructure the laoaded data:
    const loaderData = useLoaderData();
    const {name, questions} = loaderData.data;


    const handleRightAnswerClick = (rightAnswerCount) => {
        setCountRightAnswer(countRightAnswer + rightAnswerCount);
    }
    const handleWrongAnswerClick = (wrongAnswerCount) => {
        setCountWrongAnswer(countWrongAnswer + wrongAnswerCount);
    }

    return (
        <div className='quizes'>
           
            <div className='quize-and-stats-component-container'>
                <div className='quize-card-container'>
                    <h1>Quizes of {name}</h1>
                    {questions.map(question => <QuizeCard 
                        key={questions.id} question={question} handleRightAnswerClick={handleRightAnswerClick}
                        handleWrongAnswerClick={handleWrongAnswerClick}
                    ></QuizeCard>)}            
                </div>
                <div className='stats-component-container'>
                    <Stats
                        countRightAnswer={countRightAnswer}
                        countWrongAnswer={countWrongAnswer}
                    ></Stats>
                </div>
            
            </div>
        </div>
    );
};

export default Quizes;