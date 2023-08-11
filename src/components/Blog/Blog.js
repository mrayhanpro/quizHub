import React from 'react';
import './Blog.css'
import blogImage from './reactRouter.jpg';

const Blog = () => {
    return (
        <div className='blog'>
            <img src={blogImage} alt='Blog img not found'></img>
            <p id='blog-img-caption'>Image: React Router</p>
           <h3>What is the purpose of react router?</h3>
           <div className='blog-details'>
            <p><span style={{color: "yellow"}}>Athour:</span> Willium hams</p>
            <p><span style={{color: "yellow"}}>ReadTime:</span> 7.5 mins</p>
            <p><span style={{color: "yellow"}}>Published:</span> 10/05/2023</p>
           </div>
        </div>
    );
};

export default Blog;

