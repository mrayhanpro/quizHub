import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import Nabvar from '../../components/Navbar/Nabvar';
import './Header.css';
import { XMarkIcon, Bars3Icon} from '@heroicons/react/24/solid'


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    return (
       <div className='header'>
        <Logo></Logo>
        {
            openMenu ? <Nabvar openMenu={openMenu}/> : <Nabvar openMenu={openMenu}/>
        }
        <div className='menuBar' onClick={() => setOpenMenu(!openMenu)}>
            { openMenu ? <Bars3Icon></Bars3Icon> : <XMarkIcon></XMarkIcon>}
        </div>
       </div>
    );
};
export default Header;