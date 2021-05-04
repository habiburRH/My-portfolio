import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './About.css'
import profile from '../../images/profile.png'
const About = () => {
    return (
        <div className="about-area">
            <h1 className="about-title text-center m-5">ABOUT <span style={{color:'#fff'}}>ME </span> </h1>
            <div className="about-container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="about-img">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-3">
                        <div className="about-text">
                            <h3>Hi, <span style={{color:'#ff1818'}}> I'm MD HABIBUR RAHMAN</span></h3>
                            <p>
                                I have a great passion for programming and that passion derived me towards web development. Now I want to select that passion as my full-time career. I build dynamic responsive front-end and back-end integrated website using
                                <span style={{color:'#ff1818'}}> react js, node js, express js , mongodb database</span>  and latest technologies.
                            </p>
                            <a href="https://www.facebook.com/habiib.fafoor/">
                            <button className="mr-3 btn btn-outline-primary"><FontAwesomeIcon icon={faFacebookF} /> Facebook</button>
                        </a>
                        <a href="https://www.linkedin.com/in/md-habibur-rahman-a72065211/">
                            <button className="mr-3 btn btn-outline-secondary"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button>
                        </a>
                        <a href="https://github.com/habiburRH">
                            <button className="mr-3 btn btn-outline-success"><FontAwesomeIcon icon={faGithub} /> GitHub</button>
                        </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;