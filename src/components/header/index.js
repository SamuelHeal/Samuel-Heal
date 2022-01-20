import React, { useState } from 'react';
import './header.css';
import ComputerHeader from './computer';
import PhoneHeader from './phone';
import { FaBars } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='headerContainer'>
      <div className='logo'>SH</div>
      <div className='nav'>
        <div className='compNav'>
          <ComputerHeader />
        </div>
        <div className='phoneNav'>
          <div onClick={() => setMenuOpen(!menuOpen)}>
            <i className='menuIcon'>
              <FaBars />
            </i>
          </div>

          {menuOpen && (
            <PhoneHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
