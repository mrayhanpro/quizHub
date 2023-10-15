import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Nabvar = ({openMenu}) => {
  console.log(openMenu);
  
  
    return (
      <div className={`navitems ${openMenu ? "show" : "hide"}`}>
      <Link to='/'>Home</Link>
      <Link to='Topics'>Topics</Link>
      <Link to='Statics'>Statics</Link>
      <Link to='Blogs'>Blogs</Link>
      <Link to='About'>About</Link>
      <Link to='Contact'>Contat</Link>
  </div>
    );
};

export default Nabvar;