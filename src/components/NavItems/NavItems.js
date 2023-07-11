import React from 'react';
import './NavItems.css';
import { Link } from 'react-router-dom';

const NavItems = () => {
    return (
        <div>
         <Link to='/home'>Home</Link>
         <Link to='/Topics'>Topics</Link>
         <Link to='/Statics'>Statics</Link>
         <Link to='/Blogs'>Blogs</Link>
         <Link to='/About'>About</Link>
         <Link to='/Contat'>Contat</Link>
        </div>
    );
};

export default NavItems;