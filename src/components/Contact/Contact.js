import React from 'react';
import './Contact.css'
import Footer from '../../layouts/Footer/Footer';

const Contact = () => {
    return (
        <div className='contact'>
            <h1>Get In Touch!</h1>
            <div className='form-container'>          
                <form action="/action_page.php">
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" placeholder="Your first name here"/><br/>
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" placeholder="Your last name here"/><br/>

                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" placeholder='example@gmail.com'/><br/>

                    <label for="number"> Your phone:</label>
                    <input type="number" id="number" name="number" placeholder='+8801xxxxxxxxx'/><br/>

                    <label for="messege">Type your messege here:</label>
                    <textarea placeholder='Write your messege here...' id='messege' name='messege'></textarea> <br/>

                    <label for="submit">Click the button to submit:</label>
                    <input type="submit" value="Submit" id='submit'/>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;