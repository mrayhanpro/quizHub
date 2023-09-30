import React from 'react';
import './Blogs.css';
import Footer from '../../layouts/Footer/Footer';
import Blog from '../Blog/Blog';
import { useLoaderData } from 'react-router-dom';





const Blogs = () => {
    const datas = useLoaderData();
    console.log(datas);
    return (
        <div>
            <div className='blogs-cards-container'>
                {
                    datas.map(data => <Blog key={data.id} data={data}></Blog>)
                }
            </div>
            <div className='footer'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blogs;