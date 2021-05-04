import React from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import './HeaderMain.css'
import bg2 from '../../../images/bg2.png'

const HeaderMain = () => {

    return (
        <div className="headerMain-container">
            <main className="row d-flex align-items-center justify-content-center">
                <div className="header-text col-md-5 col-sm-12  offset-md-1 ">
                    <div className="headerMain-title">
                    <h1 >Hi, There!<br /> I'M <span style={{color:'#ff3e3e'}}>MD HABIBUR RAHMAN.</span> </h1>
                    <div className="headerMain-title-typeWriter">
                    <Typewriter
                        options={{
                            strings: ['Web Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    
                    </div>
                   <div className="header-button">
                   <a href="https://drive.google.com/file/d/1cko9xUXZ55Wy_sS26y7xLHfARVCathti/view?usp=sharing"> <button className="btn btn-danger mt-5"><FontAwesomeIcon icon={faDownload}/> DOWNLOAD RESUME</button></a>
                   </div>
                    </div>
                    
                </div>
                <div className="col-md-6 col-sm-12 headerMain-img">
                    <img src={bg2} alt="" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;