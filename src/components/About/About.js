import React from 'react';
import './About.css'
import Footer from '../../layouts/Footer/Footer';

const About = () => {
    return (
        <div className='about'>
           <h1> About us:</h1>

           <div className='about-text-contaier'>  
            <p className='about-text'>
                    Welcome to our website! We are a team of passionate learners who believe that everyone should have access to quality education. Our mission is to provide you with the best resources and tools to help you improve your skills and achieve your goals.

                    Our website is designed to be user-friendly and easy to navigate. Whether you are a beginner or an advanced learner, we have something for everyone. From tutorials and courses to quizzes and assessments, we offer a wide range of learning materials to suit your needs.

                    We are committed to providing you with the highest quality content and resources. Our team of experts works hard to ensure that our materials are up-to-date, accurate, and relevant. We are always looking for ways to improve our website and welcome your feedback.

                    Thank you for visiting our website. We hope that you find our resources helpful and informative. If you have any questions or comments, please don't hesitate to contact us.
                </p>
           </div>
           <div className="">
             <Footer></Footer>
           </div>
        </div>
    );
};

export default About;