import React from "react";
import './About.css';
import profile2 from '../../assets/profile2.png';
import graduation from '../../assets/graduation.jpg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
      <h1>About me</h1>
    </div>
    <div className="about-sections">
    <div className="about-left">
        <img src={graduation} alt="" />
    </div>
      <div className="about-right">
        <div className="about-para">
            <p>I am a dedicated and motivated person eager to contribute to the academic
            community and prepare for a great career as an employee.
            I am eager to take on new possibilities and challenges that will help shape my personal and
                professional development.</p>
        </div>
        <div className="about-skills">
            <div className="about-skill"><h4>HTML & CSS</h4><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><h4>JavaScript</h4><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><h4>React JS</h4><hr style={{width:"30%"}}/></div>
            <div className="about-skill"><h4>Canva</h4><hr style={{width:"60%"}}/></div>
        </div>
    </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1>20+</h1>
            <h3>SCHOOL PROJECTS COMPLETED</h3>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>1</h1>
            <h3>PRESIDENT LISTER</h3>
        </div>
        <hr/>
        <div className="about-achievement">
            <h1>2</h1>
            <h3>DEAN'S LSTER</h3>
        </div>
    </div>
    </div>
  );
}

export default About;