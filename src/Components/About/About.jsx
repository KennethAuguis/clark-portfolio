import React from "react";
import './About.css';
import graduation from '../../assets/graduation.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1 style={{ cursor: 'default' }}>About me</h1>
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={graduation} alt="Graduation" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p style={{ cursor: 'default' }}>
              My name is Kenneth Clark G. Auguis. I graduated from the University of the Assumption in June 2025. I am a dedicated and motivated individual, eager to grow both personally and professionally. I’m passionate about learning, ready to take on new challenges, and excited to contribute to any organization I become part of.
            </p>
          </div>

          <div className="about-skills">
            <div className="about-skill"><h4>HTML & CSS</h4></div>
            <div className="about-skill"><h4>JavaScript</h4></div>
            <div className="about-skill"><h4>Vite-React</h4></div>
            <div className="about-skill"><h4>Canva</h4></div>
            <div className="about-skill"><h4>Figma</h4></div>
            <div className="about-skill"><h4>Vue js</h4></div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>20+</h1>
          <h3>SCHOOL PROJECTS COMPLETED</h3>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>1</h1>
          <h3>PRESIDENT LISTER</h3>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <h3>DEAN'S LISTER</h3>
        </div>
      </div>
    </div>
  );
};

export default About;