import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-container">
            <p className="footer-text">All © Rights Reserved to MD HABIBUR RAHMAN {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;