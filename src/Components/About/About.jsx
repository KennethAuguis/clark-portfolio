import React from "react";
import './About.css';
import profile2 from '../../assets/profile2.png';
import graduation from '../../assets/graduation.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
      <h1 style={{ cursor: 'default' }}>About me</h1>
      </div>
    <div className="about-sections">
    <div className="about-left">
        <img src={graduation} alt="" />
    </div>
      <div className="about-right">
        <div className="about-para">
            <p style={{ cursor: 'default' }}>I am a dedicated and motivated person eager to contribute to the academic
            community and prepare for a great career as an employee.
            I am eager to take on new possibilities and challenges that will help shape my personal and
                professional development.</p>
        </div>
        <div className="about-skills">
            <div className="about-skill"><h4 style={{ cursor: 'default' }}>HTML & CSS</h4><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><h4 style={{ cursor: 'default' }}>JavaScript</h4><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><h4 style={{ cursor: 'default' }}>React JS</h4><hr style={{width:"30%"}}/></div>
            <div className="about-skill"><h4 style={{ cursor: 'default' }}>Canva</h4><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><h4 style={{ cursor: 'default' }}>Figma</h4><hr style={{width:"60%"}}/></div>

        </div>
    </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1 style={{ cursor: 'default' }}>20+</h1>
            <h3 style={{ cursor: 'default' }}>SCHOOL PROJECTS COMPLETED</h3>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1 style={{ cursor: 'default' }}>1</h1>
            <h3 style={{ cursor: 'default' }}>PRESIDENT LISTER</h3>
        </div> 
        <hr/>
        <div className="about-achievement">
            <h1 style={{ cursor: 'default' }}>2</h1>
            <h3 style={{ cursor: 'default' }}>DEAN'S LSTER</h3>
        </div>
    </div>
    </div>
  );
}

export default About;