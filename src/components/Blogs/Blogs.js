import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Shared/Footer/Footer';
import NavMenu from '../Shared/NavMenu/NavMenu';
import './Blog.css'
const Blogs = () => {
    return (
        <div className="blog-container">
            <div className="blog-title">
            <h1 >Blogs</h1>
            <h4>Blogs are Coming Soon...</h4>
            </div>
            
            <NavMenu></NavMenu>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;