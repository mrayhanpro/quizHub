import Logo from '../../components/Logo/Logo';
import Nabvar from '../../components/Navbar/Nabvar';
import './Header.css';
import React from 'react';

const Header = () => {
    return (
       <div className='header'>
       <Logo></Logo>
       <Nabvar></Nabvar>
       </div>
    );
};
export default Header;