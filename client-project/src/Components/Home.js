import React from 'react'
import home_img1 from "../Assets/home-img1.jpg"

import { FcDataConfiguration } from "react-icons/fc";
import { RiGitBranchFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa6";

function Home() {
    return (
        <>
            <div className="home-section" id='home'>

                <div className="home-container">
                    <div className="home-left">
                        <p className="home-subtitle">Welcome to Our Tech World</p>
                        <h2 className='home-title'>
                            Clear Thinking<br />
                            Makes  Bright Future!
                        </h2>
                        <p className="home-para">
                        Effective was conceived with the vision of delivering versatile and adaptable IT solutions. We employ a range of groundbreaking technologies that not only simplify your tasks but also enhance productivity, eliminating the need for superfluous coding.                         </p>
                        <div className="home-btn">
                            <button className="home-btn1">
                                Get Started
                            </button>

                            {/* <IoPlay className='play-btn' /> */}

                        </div>
                    </div>
                    <div className="home-right">
                        <div className="img-card">
                            <img src={home_img1} alt="software solution"
                                width="452px"
                                height="452px" />
                            <div className="ball1"></div>
                            <div className="ball2"></div>
                        </div>
                    </div>
                </div>

                <div className="home-cardsection">
                    <div className="home-card">
                        <RiGitBranchFill className='icon1' />
                        <h2 className="homecard-title">Access Control</h2>
                        <p className="homecard-para">Maintain the integrity of data with strong access controls, enabling smooth management of user permissions.
                        </p>
                    </div>
                    <div className="home-card">
                        <RiTeamFill className='icon2' />
                        <h2 className="homecard-title">Team Management</h2>
                        <p className="homecard-para">Enhance teamwork and increase efficiency with user-friendly team management resources, promoting a unified and productive work process.</p>
                    </div>
                    <div className="home-card">
                        <FaLaptopCode className='icon3' />
                        <h2 className="homecard-title">Code Security</h2>
                        <p className="homecard-para">Protect your digital resources with cutting-edge code security protocols, offering reassurance for your software development endeavors.</p>
                    </div>
                    <div className="home-card">
                        <FcDataConfiguration className='icon4' />
                        <h2 className="homecard-title">Zero Configuration</h2>
                        <p className="homecard-para"> Enjoy seamless deployment and optimization with our no-configuration-needed solutions, making your software setup straightforward.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home