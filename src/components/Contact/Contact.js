import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import "./Contact.css";
import Email from "./Email";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h1 className="pt-3 text-center pb-3 contact-title">CONTACT <span style={{color:'#ff1818'}}>ME</span></h1>
      <div className="contact-area d-flex justify-content-center">
      <div className="m-2">
              <a href="mailto:habibur.cse09@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="habibur.cse09@gmail.com">
                <FontAwesomeIcon icon={faEnvelopeSquare} /> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/md-habibur-rahman-a72065211/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-secondary" title="Visit my LinkenIn">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/habiburRH" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-success" title="My other projects">
                <FontAwesomeIcon icon={faGithubSquare} /> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/habiib.fafoor/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                <FontAwesomeIcon icon={faFacebookSquare} /> FaceBook
                </Button>
              </a>
            </div>
      </div>
    </div>
  );
};

export default Contact;
