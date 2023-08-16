import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Footer from '../../layouts/Footer/Footer';
import Blog from '../Blog/Blog';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);

    const [blogsData, setBlogsData] = useState([])
    console.log(blogsData);
        
    useEffect(() => {
        fetch('./Utilities.json')
        .then(res => res.json())
        .then (data => setBlogsData(data))
    }, [])

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