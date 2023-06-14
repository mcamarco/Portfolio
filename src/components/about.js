import React from 'react';
import MickeysHeadshot from '../images/Mickey_Full.jpeg';

function About() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-3">
              <img src={MickeysHeadshot} alt="Mickey's Headshot" className="img-fluid" />
            </div>
            <div className="col-md-9">
              <p>
                Mickey Camarco is a dedicated professional with a passion for technology and a drive for success. With a strong background in technical channel enablement, pre-sales solutions engineering, and business analysis, they bring a wealth of experience to the table. Throughout their career, Mickey has consistently exceeded sales targets, driven partner-sourced revenue, and built strategic partnerships.
              </p>
              <p>
                They excel in delivering compelling technical presentations, influencing product roadmaps, and providing innovative solutions to complex problems. Mickey thrives on challenges and continuously seeks opportunities to expand their knowledge and expertise. With a keen eye for detail and a strong analytical mindset, they consistently deliver high-quality results.
              </p>
              <p>
                Recently, Mickey completed the rigorous coursework in full-stack web development at the Penn LPS Coding Boot Camp, becoming a skilled full-stack web developer. Through this immersive program, they demonstrated proficiency in front-end and back-end technologies, developed dynamic web applications using modern frameworks and libraries, and applied industry best practices and coding standards.
              </p>
              <p>
                With their newly acquired knowledge and hands-on experience as a full-stack web developer, Mickey is well-equipped to tackle diverse technical challenges and contribute to innovative projects. They are excited to apply their skills and continue their journey of growth and learning in the field of web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
