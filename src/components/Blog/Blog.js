import React from 'react';
import './Blog.css'
import blogImage from './reactRouter.jpg';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='blog'>
            <img src={blogImage} alt='Blog img not found'></img>
            <p id='blog-img-caption'>Image: React Router</p>
            <div className='question-container'>
                <h3>What is the purpose of react router?</h3>       
            </div>
     
           <div className='blog-details'>
                <div>
                    <h5>Athour:</h5>
                    <p> Willium hams</p>
                </div>
                <div>
                    <h5>ReadTime:</h5>
                    <p> 7.5 mins</p>
                </div>
                <div>
                    <h5>Published:</h5>
                    <p>10/05/2023</p>
                </div>
            </div>
            <button><Link>Learn...</Link></button>
        </div>
    );
};

export default Blog;

