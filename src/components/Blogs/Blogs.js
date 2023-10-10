import React from 'react';
import './Blogs.css';
import Footer from '../../layouts/Footer/Footer';
import Blog from '../Blog/Blog';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
    // receive the loaded data:
    const datas = useLoaderData();

    return (
        <div>
            <div className='blogs-cards-container'>
                {datas.map(data => <Blog key={data.id} data={data}></Blog>)}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;