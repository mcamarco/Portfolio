import React from 'react';
import resume from '../images/Resume.pdf';

function Resume() {
  return (
    <div className='container'>
      <div className='row justify-content'>
      <div className="card card-resume col-md-4 mt-4 col-sm-12">
          <div className="card-header">
            <h2> Technical Skills</h2>
          </div>
          <div className="card-body">
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Git</li>
              <li>Bootstrap</li>
              <li>DOM Manipulation</li>
              <li>APIs</li>
              <li>jQuery</li>
              <li>JSON</li>
              <li>AJAX</li>
              <li>Progressive Web Apps (PWA)</li>
              <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
              <li>MySQL or other database system</li>
              <li>MVC Paradigm Testing (unit testing, integration testing, etc.)</li>
              <li>NoSQL databases</li>
              <li>Software as a Service (SaaS)</li>
              <li>eSign Platforms</li>
              <li>Computer Science Fundamentals (data structures, algorithms, etc.)</li>
            </ul>
          </div>
        </div>

        <div className="card col-md-4 mt-4 col-sm-12">
          <div className="card-header">
            <h2> Soft Skills</h2>
          </div>
          <div className="card-body">
            <ul>
              <li>Solution Selling</li>
              <li>Strategic Partnerships</li>
              <li>Technical Pre-Sales</li>
              <li>Account Management</li>
              <li>Sales</li>
              <li>Product Roadmaps</li>
              <li>QA Testing</li>
              <li>Leadership abilities</li>
              <li>Continuous learning</li>
              <li>Business analysis</li>
              <li>Providing innovative solutions</li>
              <li>Identifying customer business problems</li>
              <li>Thought leadership</li>
              <li>Creating and managing customer relationships</li>
              <li>Market research</li>
              <li>Sales support</li>
              <li>Product Management</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='resumeDownload'>
      <a href={resume} download>Download Resume Here</a>
</div>
    </div>
  );
}

export default Resume;
