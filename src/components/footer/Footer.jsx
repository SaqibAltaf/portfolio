import React from "react";
import './footer.css';

import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            {/* <a href="#" className="footer__logo">Malik Saqib Altaf</a> */}

            <div className="footer__socials">
                <button className="btn btn-primary footer-btn">
                    <a href="https://www.linkedin.com/in/saqib-altaf/" target="#"><BsLinkedin /><h4>LinkedIn</h4></a>
                    
                </button>
                
                <button className="btn btn-primary footer-btn">
                    <a href="https://github.com/SaqibAltaf" target="#"><BsGithub /><h4>GitHub</h4></a>
                    
                </button>
               
            </div>

            <div className="footer_copyright">
                <small>&copy; Malik Saqib Altaf All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;