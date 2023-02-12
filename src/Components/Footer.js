//create a footer page
import React, { Component } from 'react';
import '../Styles/Footer.css';

import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

class Footer extends Component {
    render() {
        return (
            <div className="footer">
            
                <div className="socials">
                    <a href="https://www.instagram.com/africom_kenya/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://twitter.com/AfricomKenya" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/company/africom-kenya/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>

                <div className="statements">
                    <p>We are located at bishop Magua center,Ground floor,Ngong rd</p>
                    
                </div>

                <div className="footnotes">
                    <p>© Copyright@ Africom All Rights Reserved.</p>
                    <p>Terms of Use | Privacy Policy</p>
                </div>

                
            </div>
        );
    }
}

export default Footer;

    

