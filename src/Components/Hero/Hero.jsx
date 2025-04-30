import React from "react";
import './Hero.css';
import profile4 from '../../assets/profile4.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile4} alt="" className="hero-img" />
      <h1>I'm Kenneth
        a <span>Front End developer</span>
      </h1>
      <p>I build clean, simple, and user-friendly digital experiences.</p>
      <div className="hero-actions">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a
         href="https://kennethauguis.github.io/clark-portfolio/Resume.pdf" target="_blank" rel="noopener noreferrer"  className="resume-link"> My Resume</a>
      </div>

      </div>
    </div>
  );
}

export default Hero;
