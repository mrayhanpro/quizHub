import React from 'react';
import './Topic.css'

const Topic = ({topic}) => {
    console.log(topic);
    return (
        <div className='topic'>
            <img src={topic.logo} alt='topic img'></img>
            <div className='topic-detail'>
            <h2>{topic.name}</h2>
            <p className='ratings'>
                {topic.total} <span>Quizes</span>
            </p>
            <button className='get-quiz-btn' >
                Get...
            </button>

            </div>

        </div>
    );
};

export default Topic;