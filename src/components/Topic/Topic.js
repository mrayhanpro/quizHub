import React from 'react';
import './Topic.css'
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    return (
        <div className='topic'>
            <img src={topic.logo} alt='topic img'></img>
            <div className='topic-detail'>
            <h2>{topic.name}</h2>
            <p className='ratings'>
                {topic.total} <span>Quizes</span>
            </p>
            <button className='get-quiz-btn' >
                <Link to={`Quizes/${topic.id}`}>Get</Link>
            </button>

            </div>

        </div>
    );
};

export default Topic;