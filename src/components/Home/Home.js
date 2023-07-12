import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import SubHeader from '../../layouts/SubHeader/SubHeader';
import Footer from '../../layouts/Footer/Footer';

const Home = () => {
    const topicsData = useLoaderData();
    const {data} = topicsData;

    return (
        <div className='topics'>
            <SubHeader></SubHeader>
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

export default Home;