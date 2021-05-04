import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './NavMenu.css'
import { Link } from 'react-router-dom';
const NavMenu = () => {
    return (
        <div>
        <Navbar
          fixed="top"
          variant="dark"
          expand="md"
          className=" animate-navbar nav-theme justify-content-between"
        >
          <div className="container">
          <div>
            <Navbar.Brand style={{color:'#ff5353', fontWeight:700}} href="#home">
              HABIBUR
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
                <Link className="nav-link mr-5" to="/">Home</Link>
                <Link className="nav-link mr-5" to="/projects">Projects</Link>
                <Link className="nav-link mr-5" to="/blogs">Blogs</Link>
                <Link className="nav-link mr-5" to="/resume">Resume</Link>
                <Link className="nav-link mr-5" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </div>
          </div>
        </Navbar>
      </div>
    );
};

export default NavMenu;