import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './Resume.css'
import NavMenu from '../Shared/NavMenu/NavMenu.js'
import Contact from '../Contact/Contact.js'
import Footer from '../Shared/Footer/Footer.js'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const Resume = () => {
  return (
    <div className="resume-container">
      <NavMenu></NavMenu>
      <div className="container">
        <div className="resume-area-header">
        <h1 className="mb-5">RESUME</h1>
        <div className="resume-download text-center mb-5">
      <a  href=""><button className="btn btn-danger"><FontAwesomeIcon icon={faDownload}/> DOWNLOAD RESUME</button></a>
      </div>
        </div>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="resume-content">
            <h4>MD HABIBUR RAHMAN</h4>
            <p>I have a great passion for programming and that passion derived me towards web development.
            Now I want to select that passion as my full-time career. I build dynamic responsive front-end
            and back-end integrated website using react js, node js, express js , mongodb database and latest
            technologies.
            </p>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="resume-content">
            <h4>SKILLS</h4>
            <ul>
              <li>
                I mainly use React js, HTML5, CSS3, React-bootstrap, Material-Ui as my front-end web developing technology.
              </li>
              <li>
                For back end and server site work I use Node js, Express Js, MongoDb database.
              </li>
              <li>
                I am a JavaScript fan. So, Basically I use javaScript as my programming language.
              </li>
              <li>
                I am also comfortable with React Native, TypeScript, Redux.
              </li>
            </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="resume-content">
            <h4>SOME PROJECTS</h4>
            <h5>PHYSIOZONE</h5>
            <ul>
              <li>Responsive full-stack project with CRUD operation.</li>
              <li>Users can place orders with Firebase authentication and a pay system like a stripe.</li>
              <li>Admin can create new services and monitor placed orders.</li>
              <li>Users will allow buying any service with firebase authentication.</li>
            </ul>
            <h5>DESHI SHOP</h5>
            <ul>
              <li>This is a MERN Stack responsive project</li>
              <li>Firebase authentication and placed order system for users.</li>
              <li>Created with React.js, MongoDB, Node.js, Express.js, React Router, Bootstrap, etc</li>
              <li>Incorporated API calls to several applications and stored data efficiently in our MongoDB backend.</li>
            </ul>
            
            <Link to="/projects"><button className="mt-3 mb-3 btn btn-danger">PROJECT DETAILS</button></Link>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div className="resume-content">
            <h4>EDUCATION</h4>
            <h5>B.Sc in Computer Science and engineering</h5>
            <ul>
              <li>Daffodil International Univercity
              </li>
              Year: 2016-2020
            </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
          <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
          </TimelineSeparator>
          <TimelineContent>
           
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div className="resume-download text-center mb-5">
      <a  href="https://drive.google.com/file/d/1cko9xUXZ55Wy_sS26y7xLHfARVCathti/view?usp=sharing"><button className="btn btn-danger"><FontAwesomeIcon icon={faDownload}/>DOWNLOAD RESUME </button></a>
      </div>
      </div>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Resume;