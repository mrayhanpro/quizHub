import React from 'react';
import './Blog.css'
import Footer from '../../layouts/Footer/Footer';


const Blog = ({data}) => {

    return (
        <div id='blog'>
           <div id='blog-container'>
                <h3>What is the purpose of react router? Here is all about react router.</h3>
                <p>
                The Router in React JS is a pure JavaScript package that allows you to use React to create complicated client-side apps. Initially launched in 2013, it has become one of the most prominent routing libraries in today's online applications. React Router makes it simple to manage the URL and state of your application. You specify all of the potential URL patterns in your app and which UI component should be displayed for each one using React Router. This Router decreases the amount of code an app requires to maintain its state and makes adding new features more accessible.Although there are significant differences, React may use a router on both the server and the browser.<br/><br/><br/>
                    
                We will need to utilize Router in React JS to create a React application with navigation across multiple pages. React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page. It also allows us to use browser history features while preserving the right application view. A Router in React JS routes using a component-based architecture. It offers various routing components as required by the application. If you wish to learn more about its applications, check out this blog: Navigate React Router programmatically.</p>
                <h5>The conclusion</h5>
           </div>
           <div id='footer'>
                <Footer></Footer>
           </div>
        </div>
    );
};

export default Blog;

