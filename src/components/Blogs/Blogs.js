import React from 'react';
import './Blogs.css'
import Footer from '../../layouts/Footer/Footer';
import Blog from '../Blog/Blog';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
    
    const blogsData = useLoaderData() ;
    console.log(blogsData);


    return (
        <div>
            {
                <Blog></Blog>
            }

            <div className='footer'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blogs;