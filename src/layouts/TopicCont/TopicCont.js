import React from 'react';
import './TopicCont.css'
import Topic from '../../components/Topic/Topic';

const TopicCont = ({data}) => {

    return (
        <div className='quiz-cont'>
             <h2> Select the topic you want to get quiz about.</h2>
        <div className='topic-cont'>
            {
                data.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
        </div>
    );
};

export default TopicCont;