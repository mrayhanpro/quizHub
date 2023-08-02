import React from 'react';
import './SubHeader.css';

const SubHeader = () => {
    return (
        <div className='sub-header'>
           <h2>
                Become more knowladgable by practice with <strong style={{color: "white", textShadow: "1px 1px 5px black"}}>QuizHub</strong><br></br>
                Take quizes to improve and test yourself to know where you are, <br></br> 
                How much better you are!
            </h2>
        </div>
    );
};

export default SubHeader;