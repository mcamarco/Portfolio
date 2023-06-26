import React from 'react';
import linkedinLogo from '../images/linkedinLogo.png';
import githubIcon from '../images/github-logo.png';

function Footer() {
  const iconStyle = {
    width: '24px',
    height: '24px',
  };

  return (
    <div className='footer'>

      {/* Email
      <a href="mailto:mickey.camarco@gmail.com">Contact Me</a>
      <br></br> */}

      {/* GitHub */}
      <a href="https://github.com/mcamarco">
        <img src={githubIcon} alt="GitHub" style={iconStyle} />
      </a>

      {/* LinkedIn */}
      <a href="https://linkedin.com/in/mcamarco">
        <img src={linkedinLogo} alt="LinkedIn" style={iconStyle} />
      </a>
    </div>
  );
}

export default Footer;
