import React, { useContext } from 'react';
import './Contact.css'
import Footer from '../../layouts/Footer/Footer';
import {dataContext} from '../../App'

const Contact = () => {
    // const data = useContext(dataContext);
    // console.log(data);
    return (
        <div>
            <h3>This is contact page.</h3>
                {/* <h4>{data}</h4> */}
                <Footer></Footer>
        </div>
    );
};

export default Contact;