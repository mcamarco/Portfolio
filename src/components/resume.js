import React from 'react';
import resume from '../images/Resume.pdf';

function Resume() {
  return (
    <div className="container">
      
            <div className="row">
        <div className="col-md-6">
          <div className="card mb-4">
            
            <div className="card-header">
              <h2>Technical </h2>
            </div>
            <div className="card-body">
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Git/GitHub</li>
                <li>Bootstrap</li>
                <li>DOM Manipulation</li>
                <li>RESTful APIs</li>
                <li>jQuery</li>
                <li>JSON</li>
                <li>AJAX</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                <li>MySQL or other database systems</li>
                <li>MVC Paradigm</li>
                <li>Testing (unit testing, integration testing, etc.)</li>
                <li>NoSQL databases</li>
                <li>Software as a Service (SaaS)</li>
                <li>eSign Platforms</li>
                <li>Computer Science Fundamentals (data structures, algorithms, etc.)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-header">
              <h2>Software/Applications</h2>
            </div>
            <div className="card-body">
              <ul>
                <li>Nintex Process Platform</li>
                <li>Canto</li>
                <li>Expensify</li>
                <li>Millennia FileStar</li>
                <li>MRI</li>
                <li>Nexus</li>
                <li>VTS (View The Space)</li>
                <li>Atlassian Jira & Confluence</li>
                <li>SharePoint Online (O365)</li>
                <li>GitHub/GitLab</li>
                <li>PowerBI</li>
                <li>Concur</li>
                <li>Microsoft Dynamics</li>
                <li>Asana</li>
                <li>Dropbox</li>
                <li>Camtasia</li>
                <li>Google Suite</li>
                <li>Salesforce CRM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="resumeDownload">
        <a href={resume} download>Download Resume Here</a>
      </div>
    </div>
  );
}

export default Resume;
