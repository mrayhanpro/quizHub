import './ErrorPage.css';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className='errorPage'>
            <p>
                <span style={{fontSize: '50px'}}>Ops!</span>
                Mey be there is something wrong.<br/> Try to debug please! 
            </p> 
        </div>
    );
};

export default ErrorPage;