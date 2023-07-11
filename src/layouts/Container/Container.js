import React from 'react';
import './Container.css'
import QuizCont from '../QuizCont/QuizCont';
import CalCart from '../CalCart/CalCart';
const Container = () => {
    return (
        <div className='container'>
            <QuizCont></QuizCont>
            <CalCart></CalCart>
        </div>
    );
};

export default Container;