import React from 'react';
import './Blogs.css'
import Footer from '../../layouts/Footer/Footer';
import Datas from '../../Utilities/Utilities.json';
import Blog from '../Blog/Blog';




const Blogs = () => {

    return (
        <div>
            <div className='blogs-cards-container'>
                {
                    Datas.map(data => <Blog key={data.id} data={data}></Blog>)
                }
            </div>
            <div className='footer'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Blogs;