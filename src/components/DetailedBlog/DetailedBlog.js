import React from 'react';
import Footer from '../../layouts/Footer/Footer';
import './DetailedBlog.css'
import { useLoaderData } from 'react-router-dom';

const DetailedBlog = () => {
    // Fetching datas that are loaded in the route page.
    const blogDatas = useLoaderData() ;
    const {blogData, paramid}= blogDatas;

    // seperating the specific value object from the array of object.
    const specifiedBlogData = blogData[parseInt(paramid - 1)] ;

    // Destructuring datas 
    const { question, answer} = specifiedBlogData
    console.log(answer);

    return (
        <div>
            <div id='blog-containers-container'>
           <div id='blog-container'>
                <h3>{question}</h3>
                <p>{answer}</p>
           </div>
           </div>
           <div id='footer'>
                <Footer></Footer>
           </div>
        </div>
    );
};

export default DetailedBlog;