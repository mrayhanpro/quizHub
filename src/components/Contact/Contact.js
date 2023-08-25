import React, { useState, } from 'react';
import './Contact.css'
import Footer from '../../layouts/Footer/Footer';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")

    return (
        <div className='contact-page'>
            <h1>Get In Touch!</h1>
            <div className='form-container'>          
                <form action="/action_page.php">
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" placeholder="John"/><br/>
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" placeholder="Doe"/><br/>

                    <label for="email">Your Email:</label>
                    <input type="email" id="email" name="email" placeholder='example@gmail.com'/><br/>

                    <label for="number"> Your phone:</label>
                    <input type="number" id="number" name="number" placeholder='+8801755555555'/><br/>

                    <textarea placeholder='Write your messege here' id='messege' name='messege'></textarea> <br/>

                    <input type="submit" value="Submit"/>
                    <input type="reset"/>
                </form>
            </div>



            
            {/* <form>
                <label>Entername: <br/>
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label><br></br><br></br>
                <label>Enter your E-Mail:  <br/> 
                    <input 
                        type="text" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>type your messege:  <br/> 
                    <input 
                        type=""
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        width={20}
                        height={20}
                    />
                </label>
            </form> */}
     

            <Footer></Footer>
        </div>
    );
};

export default Contact;