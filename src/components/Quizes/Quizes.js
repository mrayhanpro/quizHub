import React from 'react';
import './Quizes.css'
import { useLoaderData } from 'react-router-dom';
import QuizeCard from '../QuizeCard/QuizeCard';
import Stats from '../Stats/Stats';


const Quizes = () => {
    const loaderData = useLoaderData();
    const {name, questions} = loaderData.data;


    return (
        <div className='quizes'>
           
            <div className='quize-and-stats-component-container'>
                <div className='quize-card-container'>
                     <h1>Quizes of {name}</h1>
                    {questions.map(question => <QuizeCard key={questions.id} question={question}></QuizeCard>)}            
                </div>
                <div className='stats-component-container'>
                    <Stats></Stats>
                </div>
            
            </div>
        </div>
    );
};

export default Quizes;