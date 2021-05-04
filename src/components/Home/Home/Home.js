import React from 'react';
import Particles from 'react-particles-js';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Skills from '../../Skills/Skills';
import Header from '../Header/Header';
import ProjectSummary from '../ProjectSummary/ProjectSummary';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <About></About>
          <Skills></Skills>
          <ProjectSummary></ProjectSummary>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;