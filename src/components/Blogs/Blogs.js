import React from 'react';
import './Blogs.css';
import Datas from '../../Utilities/Utilities.json';
import Footer from '../../layouts/Footer/Footer';
import BlogCard from '../BlogCard/BlogCard';




const Blogs = () => {

    return (
        <div>
            <div className='blogs-cards-container'>
                {
                    Datas.map(data => <BlogCard key={data.id} data={data}></BlogCard>)
                }
            </div>
            <div className='footer'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blogs;