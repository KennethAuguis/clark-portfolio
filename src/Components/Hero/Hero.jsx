import React from "react";
import './Hero.css';
import profile from '../../assets/profile.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="Kenneth" className="hero-img" />
      <div className="hero-content">
        <h1 style={{ cursor: 'default' }}>
          I'm Kenneth <span style={{ cursor: 'default' }}>UI/UX Designer</span>
        </h1>
        <p style={{ cursor: 'default' }}>
          I build clean, simple, and user-friendly digital experiences.
        </p>
        <div className="hero-actions">
          <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>
              Connect with me
            </AnchorLink>
          </div>
          <div className="hero-resume">
            <a
              href="public/KENNETH CLARK G. AUGUIS CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
