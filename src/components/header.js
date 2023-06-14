import React, { useState } from 'react';
import Nav from './nav';

function Header() {

  return (
    <div className='header'>

      <h1>Mickey Camarco</h1>
      <h6 className="mb-4">Pre-Sales Solutions Engineer & Full-Stack Web Developer </h6>
      <Nav> </Nav>
      
    </div>
  );
}

export default Header;