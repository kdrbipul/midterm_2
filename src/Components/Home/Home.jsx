import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import logo from '../../assets/images/sandboarding.jpg'

import "./Home.css"

const Home = () => {
    return (
        <>
        <section className="home container mx-auto my-28" id="home">
        <div className="home_left">
                <h1 className='text-white'>Hi! Welcome to our website</h1>
            <div className="home_content">
                <div className="text_animation">
                    <h3>ADVENTURE TOUR</h3>
                </div>
            </div>
            <div className="btn-box">
                <a href="#" className="m_btnb text-white">Hire Me</a>
                <a href="#" className="m_btnb text-white">Let's Talk</a>
            </div>
            <div className="home-sci">
                <a href="#" class="m_btnb"><CiFacebook /></a>
                <a href="#" class="m_btnb"><BsInstagram /></a>
                <a href="#" class="m_btnb"><BsTwitter /></a>
            </div>
        </div>
        <div className="profile-area"> 
            <div className="outer-circle">
                {/* <!-- <span className="material-icons-sharp">design_services</span>
                <span className="material-icons-sharp">dns</span>
                <span className="material-icons-sharp">code</span> -->
                <!-- <span className="material-icons-sharp">data_object</span> --> */}
            </div>
            <div className="inner-circle">
                <img src={logo} alt="logo" />
            </div>
        </div>
    </section>
        </>
    );
};

export default Home;