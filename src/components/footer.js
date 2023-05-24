import React from 'react';
import linkedinLogo from '../images/linkedinLogo.png';
// import githubIcon from '../images/github-icon.png';

function Footer() {
  const iconStyle = {
    width: '24px', // Set the desired width of the icon
    height: '24px', // Set the desired height of the icon
  };

  return (
    <div>
      {/* TODO: ADD GITHUB ICON HERE */}
      
      <a href="https://linkedin.com/in/mcamarco">
        <img src={linkedinLogo} alt="LinkedIn" style={iconStyle} />
      </a>
    </div>
  );
}

export default Footer;
