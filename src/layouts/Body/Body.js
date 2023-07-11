import React from 'react';
import './Body.css';
import SubHeader from '../SubHeader/SubHeader';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            <SubHeader></SubHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default Body;