import React from 'react';
import './Quizes.css'
import { useLoaderData } from 'react-router-dom';
import QuizeCard from '../QuizeCard/QuizeCard';

const Quizes = () => {
    const loaderData = useLoaderData();
    const {name, logo, questions} = loaderData.data;

    return (
        <div className='quizes-container'>
            <h1>Quizes of {name}</h1>
            <div className='quize-card-container'>
                {questions.map(question => <QuizeCard key={questions.id} question={question}></QuizeCard>)}            
            </div>
        </div>
    );
};

export default Quizes;