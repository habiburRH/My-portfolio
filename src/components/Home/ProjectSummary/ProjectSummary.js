import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from "react-router-dom";
// projects
import L_ChildrensDen1 from "../../../images/projects/project11.png";
import L_ChildrensDen2 from "../../../images/projects/project12.png";
import L_GadgetColony1 from "../../../images/projects/project21.png";
import L_GadgetColony2 from "../../../images/projects/project22.png";
import L_CountryTraveller from "../../../images/projects/project31.png";
import L_PinMatcher from "../../../images/projects/project41.png";
import L_PlaneTicket from "../../../images/projects/project51.png";
import L_IssueTracker from "../../../images/projects/project61.png";
import L_MealFinder from "../../../images/projects/project71.png";

import './ProjectSummary.css'

const ProjectSummary = () => {
    return (
        <div className="projectSummary-container">
            <div className="container text-center">
                <h1 className="mt-5 mb-5 projectSum-title"><span style={{color:'#ff1818'}}>PROJECT</span> SUMMARY</h1>
                <Carousel fade>
                    <Carousel.Item>
                        <div className="projectSum-img">
                        <img
                            className="d-block h-80 w-100"
                            src={L_ChildrensDen1}
                            alt="First slide"
                        />
                        </div>
                        <Carousel.Caption>
                            <h3>Children's Den</h3>
                            <p>A MERN Stack E-Learning Website</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="projectSum-img">
                        <img
                            className="d-block h-80 w-100"
                            src={L_ChildrensDen2}
                            alt="Second slide"
                        />
                        </div>

                        <Carousel.Caption>
                            <h3>Children's Den</h3>
                            <p>Administrative Control, User Control, Payment System.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="projectSum-img">
                        <img
                            className="d-block w-100"
                            src={L_GadgetColony1}
                            alt="Third slide"
                        />
                        </div>

                        <Carousel.Caption>
                            <h3>Gadget Colony</h3>
                            <p>Administrative Control, User Control, Payment System.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="projectSum-img">
                        <img
                            className="d-block w-100"
                            src={L_GadgetColony2}
                            alt="Third slide"
                        />
                        </div>
                        <Carousel.Caption>
                            <h3>Electronic Gadgets</h3>
                            <p>Administrative Controls, CRUD Operations</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="projectSum-img">
                    <img
                            className="d-block w-100"
                            src={L_PinMatcher}
                            alt="Third slide"
                        />
                    </div>
                       

                        <Carousel.Caption>
                            <h3>Pin Matcher</h3>
                            <p>Match your pin and Open up the vault</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="projectSum-img">
                    <img
                            className="d-block w-100"
                            src={L_PlaneTicket}
                            alt="Third slide"
                        />
                    </div>
                        

                        <Carousel.Caption>
                            <h3>Plane Ticket</h3>
                            <p>A simple javascript ticket cost counter</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="projectSum-img">
                    <img
                            className="d-block  w-100"
                            src={L_IssueTracker}
                            alt="Third slide"
                        />
                    </div>
                        

                        <Carousel.Caption>
                            <h3>Issue Tracker</h3>
                            <p>Post Your Issue, Get Solutions</p>
                        </Carousel.Caption>
                    </Carousel.Item>    
                    <Carousel.Item>
                    <div className="projectSum-img">
                    <img
                            className="d-block w-100"
                            src={L_MealFinder}
                            alt="Third slide"
                        />
                    </div>
                        

                        <Carousel.Caption>
                            <h3>Meal Finder</h3>
                            <p>find Your Favorite meal with a search and enjoy the recipe</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className="projectSum-img">
                    <img
                            className="d-block w-100"
                            src={L_CountryTraveller}
                            alt="Third slide"
                        />
                    </div>
                       

                        <Carousel.Caption>
                            <h3>Country Traveller</h3>
                            <p>Travel your country with your favorite ride</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               <Link to="/projects"><button className="btn btn-danger mt-5 mb-5">PROJECT DETAILS</button></Link>
            </div>
        </div>
    );
};

export default ProjectSummary;