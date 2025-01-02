import React from "react";
import './header.css';
import CTA from './CTA';
import Avatar from '../../assets/AvatarMaker.png';
import ME from '../../assets/profileFull-removebg.png'
import HeaderSocials from "./HeaderSocial";


const Header = () => {
    return (
       <header>
          <div className="container header__container">
              <h5>Hello I'm</h5>
              <h1>Malik Saqib Altaf</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            <HeaderSocials />

            <div className="box">
                <div className="about__me-image">
                    <img className="img_avatar" src={Avatar} alt="About-img" />
                    <img className="img_kg" src={ME} alt="SaqibAlaf"></img>
                </div>
            </div>

            {/* <div className="me">
                <img src={ME} alt="me" />
            </div> */}

            <a href="#contact" className="scroll__down">Scroll Down</a>
          </div>
       </header>
    )
}

export default Header;