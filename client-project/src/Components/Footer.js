import React from 'react'
import "../styles/style.css"

import { FaLinkedinIn, FaInstagramSquare, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { FaMeta, FaClock, FaLocationDot, FaRegCopyright } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

function Footer() {
    return (
        <>
            <div className="footer-section">
                <div className="footer-layout">
                    <div className="footer">
                        <div className="header-title">
                            <h3 className='header-title1 foot-head'>Tech</h3>
                            <h3 className='header-title2 foot-head'>Soft</h3>
                            <h3 className='header-title2 foot-head'>World</h3>
                        </div>
                        <div className="social-media">
                            <FaLinkedinIn className='Social-icon' />
                            <FaInstagramSquare className='Social-icon' />
                            <FaTwitter className='Social-icon' />
                            <FaMeta className='Social-icon' />
                        </div>
                    </div>
                    <div className="footer">
                        <h3 className="footer-title">Our Service
                            <div className="title-line"></div></h3>
                        <p className="footer-item">Software Development</p>
                        <p className="footer-item">Android Development</p>
                        <p className="footer-item">UI/UX Designing</p>
                        <p className="footer-item">Cloud Services</p>
                        <p className="footer-item">AR/VR Development</p>
                        <p className="footer-item">Software Testing</p>
                    </div>
                    <div className="footer">
                        <h3 className="footer-title">Quick Links
                            <div className="title-line">
                            </div></h3>
                        <p className="footer-item">FAQs</p>
                        <p className="footer-item">Services</p>
                        <p className="footer-item">Career</p>
                        <p className="footer-item">About Us</p>
                        <p className="footer-item">Privacy & Policy</p>
                        <p className="footer-item">Terms & Condition</p>

                    </div>
                    <div className="footer">
                        <h3 className="footer-title">Contact
                            <div className="title-line">
                            </div></h3>
                        <p className="footer-item"><FaPhoneAlt className='contact-icon' />+91 34656-63457</p>
                        <p className="footer-item"><IoMail className='contact-icon' />techsoftworld@gmail.com</p>
                        <p className="footer-item"><FaClock className='contact-icon' />7:00 AM - 09:00 PM</p>
                        <p className="footer-item"><FaLocationDot className='contact-icon' />India</p>
                    </div>
                </div>
                <div className="line"></div>
                <p className="copyright"><FaRegCopyright />2024 Techy Soft World. All Rights Reserved by Techy Soft World.</p>
            </div>

        </>
    )
}

export default Footer