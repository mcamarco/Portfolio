import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {

  return (
    <div>
      <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#"><Link to='/'>About</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to='/Portfolio'>Portfolio</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to='/Resume'>Resume</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to='/Contact'>Contact</Link></a>
  </li>
</ul>
     


    </div>
  );
}

export default Nav;