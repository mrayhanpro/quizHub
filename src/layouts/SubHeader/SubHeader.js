import React from 'react';
import './SubHeader.css';

const SubHeader = () => {
    return (
        <div className='sub-header'>
           <h3>
                Become more knowladgable by practice with 
                <strong style={{color: "white", textShadow: "1px 1px 5px black"}}> QuizHub </strong>
                Take quizes to improve and test yourself to know where you are and How much better you are!
            </h3>
        </div>
    );
};

export default SubHeader;