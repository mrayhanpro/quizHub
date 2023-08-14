import React, { useEffect } from 'react';
import './Blogs.css'
import Footer from '../../layouts/Footer/Footer';
import Blog from '../Blog/Blog';
import blogsData from '../../Utilities/BlogsData.json'
import { json } from 'react-router-dom';

const Blogs = () => {

    useEffect(

        fetch()
        .then(res => res.json())
        .then (data => console.log(data))
    )


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