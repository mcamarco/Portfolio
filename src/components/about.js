import React from 'react';
import MickeysHeadshot from '../images/Mickey_Full.jpeg';

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <img src={MickeysHeadshot} alt="Mickey's Headshot" className="img-fluid" />
        </div>
        <div className="col-md-9">
          <p>
            Mickey Camarco is a highly motivated and passionate individual with a strong interest in technology. They have experience in customer service, leadership, partner management, and sales enablement, as well as expertise in solution selling, strategic partnerships, and software as a service (SaaS).
          </p>

          <p>
            In my previous roles as a Technical Channel Enablement Manager, Solutions/Sales Engineer, and Business Analyst/Product Manager, I've had the opportunity to exceed sales goals, monitor technical roadblocks, and provide thought leadership at conferences and community engagements. I'm also proud to be a co-founder of Camarco Consulting LLC, a technology consulting firm that provides custom software solutions, technical support, and project management services to businesses across various industries.
          </p>

          <p>
            Aside from my professional experience, I'm also a graduate of the Penn LPS Coding Bootcamp, where I gained hands-on experience in full-stack web development using various technologies such as HTML, CSS, JavaScript, Node.js, and React. This proficiency in these technologies provides me with a well-rounded perspective, making me a valuable collaborator with developers and stakeholders.
          </p>

          <p>
            I'm committed to continuous learning and professional development, and I hold a consultative approach in all interactions with customers and prospects. I bring a unique and valuable perspective as someone who has worked both as a customer and an Independent Software Vendor (ISV), and I'm always seeking opportunities to learn and expand my knowledge.
          </p>

          <p>
            Thank you for taking the time to learn a little bit about me, and I'm excited to showcase my portfolio of work with you!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
