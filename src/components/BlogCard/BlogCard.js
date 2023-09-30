import React from 'react';
import './BlogCard.css'
import { Link } from 'react-router-dom';

const BlogCard = ({data}) => {
    const { Id, img, imageCaption, Topic, author, answer, published, readTime, question,  } = data ;

    return (
        <div className='blog-card'>

            <img src={img} alt='Blog img not found'></img>
            <p id='blog-img-caption'>Image: {imageCaption}</p>
            
            <div className='question-container'>
                <h3>{question}</h3>       
            </div>

            <div className='blog-details'>
                    <div>
                        <h5>Athour:</h5>
                        <p>{author}</p>
                    </div>
                    <div>
                        <h5>Published:</h5>
                        <p> {published} </p>
                    </div>
                    <div>
                        <h5>ReadTime:</h5>
                        <p>{readTime} </p>
                    </div>
            </div>
            <Link to="Blog">Read...</Link>          
        </div>
    );
};

export default BlogCard;