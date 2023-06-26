function Resume() {
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-header">
          <h2>Skills</h2>
        </div>
        <div className="card-body">
         <h5> Technical Skills</h5> <p>
            HTML/CSS, JavaScript, Bootstrap, DOM Manipulation, APIs, jQuery, JSON, AJAX, Git, Node.js, ES6, OOP, Express.js,
            MySQL, MVC Paradigm, Sequelize, Testing, React.js, NoSQL
            </p>
            <h5>Applications</h5>
           <p> Nintex, Canto, Expensify, Millennia FileStar, MRI,
            Nexus, VTS (View The Space), Atlassian Jira & Confluence, SharePoint Online (O365), GitHub/GitLab, PowerBI,
            Concur, Microsoft Dynamics, Asana, Dropbox, Camtasia, Google Suite, Salesforce, SAP Business One & More!
          </p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          <h2>Experience</h2>
        </div>
        <div className="card-body">
          <h5>Technical Channel Enablement Manager</h5>
          <p className="experience-info">
            Nintex | Remote | July 2022 – February 2023
          </p>
          <h5>Solutions Engineer</h5>
          <p className="experience-info">
            Nintex | Remote | April 2021 - July 2022
          </p>
          <h5>Business Analyst / Product Manager</h5>
          <p className="experience-info">
            Silverstein Properties | New York | May 2019 – April 2019
          </p>
          <h5>Diversity, Equity & Inclusion Team Member</h5>
          <p className="experience-info">
            Silverstein Properties | New York | July 2019 – April 2021
          </p>
          <h5>Inside Sales Account Manager (Temp)</h5>
          <p className="experience-info">
            Hi-Tech Fasteners Corp | New York | December 2018 – May 2019
          </p>
          <h5>Sales Associate</h5>
          <p className="experience-info">
            Metrofab Pipe, Inc | New York | April 2016 – September 2018
          </p>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          <h2>Education</h2>
        </div>
        <div className="card-body">
          <ul>
            <li>Penn LPS Coding Boot Camp, University Of Pennsylvania</li>
            <li>B.S. Business Administration, Farmingdale State College (Minor: Business Law)</li>
            <li>Project Management For Professionals, NYU School of Professional Studies</li>
          </ul>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          <h2>Certifications</h2>
        </div>
        <div className="card-body">
          <ul>
            <li>Full Stack Web Developer - University of Pennsylvania</li>
            <li>Software Development Life Cycle (SDLC) - LinkedIn Learning</li>
            <li>Technical Sales: The Role of the Sales Engineer - LinkedIn Learning</li>
            <li>Process Automation Practitioner - Nintex</li>
            <li>Workflow Cloud Practitioner - Nintex</li>
          </ul>
        </div>
      </div>

      <div className="card mt-4">
        <div className="card-header">
          <h2>Additional Information</h2>
        </div>
        <div className="card-body">
          <p>Snowboard Instructor | Blue Mountain Resort, PA | Seasonal</p>
        </div>
      </div>

      {/* <div className="resumeDownload">
        <a href="/images/Resume.pdf" download>Download Resume Here</a>
      </div> */}
    </div>
  );
}

export default Resume;
