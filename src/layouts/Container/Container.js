import React from 'react';
import './Container.css'
import QuizCont from '../TopicCont/TopicCont';
import CalCart from '../CalCart/CalCart';
import { useLoaderData } from 'react-router-dom';
const Container = () => {
    const loaderData = useLoaderData() ;
    return (
        <div className='container'>
            <QuizCont topicData={loaderData}></QuizCont>
            <CalCart></CalCart>
        </div>
    );
};

export default Container;