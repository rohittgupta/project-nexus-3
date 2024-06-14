import React from 'react'
import "../styles/style.css"

import { VscFlame } from "react-icons/vsc";

import img1 from '../Assets/img1.jpg'

function About() {
    return (
        <>
            <div className="about-section" id='about'>
                <div className="about-left">
                    <div className="img-card">
                        <img src={img1} alt="Best software solution"
                            width="452px"
                            height="452px" />
                        <div className="ball1"></div>
                        <div className="ball2"></div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-content">
                        <p className="about-title1">
                        Why Partner With Us?
                        </p>
                        <h2 className="about-title2">
                        Discover the ideal marketing <br/> solution tailored for you
                        </h2>
                        <p className="about-para">
                        Unveil the perfect marketing solution custom-made for you.
                        We stand by you in navigating all tech-related hurdles to 
                        turbocharge your business. Our exceptional support team is 
                        on standby to tackle any obstacles your business faces

                        </p>
                        <div className="about-list">
                            <p className="list">
                                <VscFlame className="list-icon" />
                                <span>We pride ourselves on delivering top-notch service</span>
                            </p>
                            <p className="list">
                                <VscFlame className="list-icon" /> <span>Experience the liberty of unrestricted internet</span>
                            </p>
                            <p className="list">
                                <VscFlame className="list-icon" /><span>We’re available round the clock to assist you</span>
                            </p>
                            <p className="list">
                                <VscFlame className="list-icon" /><span>We believe in flexibility and don’t impose time limits</span>
                            </p>
                        </div>
                        <button className="home-btn1 about-btn">
                            Let's Talk
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About