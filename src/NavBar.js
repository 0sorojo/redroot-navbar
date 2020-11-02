import React from 'react';
import logo from './red_root_logo.svg';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='logo' src={logo} alt='Red Root Productions' />
          <button className='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <div className='links-container show-container'></div>
        <ul className='social-icons'></ul>
      </div>
    </nav>
  );
};

export default NavBar;
