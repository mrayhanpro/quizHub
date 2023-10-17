import React from 'react';
import './Topics.css'
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import Footer from '../../layouts/Footer/Footer';

const Topics = () => {
    const topicsData = useLoaderData();
    const {data} = topicsData;
    return (
        <div className='topics'>
            <h2 className='topic-container-heading'> Select the topic you would love to get quiz about.</h2>
            <div className='topics-cont'>
                {
                    data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                    ></Topic>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Topics;