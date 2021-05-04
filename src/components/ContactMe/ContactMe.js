import React from 'react';
import Contact from '../Contact/Contact';
import Email from '../Contact/Email';
import Footer from '../Shared/Footer/Footer';
import NavMenu from '../Shared/NavMenu/NavMenu';
import './ContactMe.css'
const ContactMe = () => {
    return (
        <div className="contactMe-container ">
            <div className="contactMe-title">
            <h1>MD HABIBUR <span style={{color:'#fff'}}>RAHMAN</span> </h1>
            <h4 className="pb-5" style={{color:'#fff'}}>Front end React Developer</h4>
            </div>
            <NavMenu></NavMenu>
            <Contact></Contact>
            <Email></Email>
            <Footer></Footer>
        </div>
    );
};

export default ContactMe;