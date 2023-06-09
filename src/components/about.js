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
                I am a dedicated professional with a passion for technology and a drive for success. With a strong background in technical channel enablement, pre-sales solutions engineering, and business analysis, I bring a wealth of experience to the table. Throughout my career, I have consistently exceeded sales targets, driven partner-sourced revenue, and built strategic partnerships.
              </p>
              <p>
                I excel in delivering compelling technical presentations, influencing product roadmaps, and providing innovative solutions to complex problems. I thrive on challenges and continuously seek opportunities to expand my knowledge and expertise. With a keen eye for detail and a strong analytical mindset, I consistently deliver high-quality results.
              </p>
              <p>
                Recently, I completed the rigorous coursework in full-stack web development at the Penn LPS Coding Boot Camp, further expanding my technical skill set. Through this immersive program, I demonstrated proficiency in front-end and back-end technologies, developed dynamic web applications using modern frameworks and libraries, and applied industry best practices and coding standards.
              </p>
              <p>
                With my newly acquired knowledge and hands-on experience, I am well-equipped to tackle diverse technical challenges and contribute to innovative projects. I am excited to apply my skills and continue my journey of growth and learning in the field of web development. I look forward to connecting with like-minded professionals and exploring new opportunities to contribute my skills and expertise.
              </p>
              <p>Let's connect and embark on an exciting journey together!</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
